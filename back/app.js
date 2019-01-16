// je déclare l'ensemble des librairies nécessaires
const express  =  require('express');
const connection = require("./helpers/db.js");
const bodyParser  =  require('body-parser');
const morgan  =  require('morgan');
const app  =  express();
// je configure les routes
const signupRouter = require('./routes/auth/signup.js');
const rechercheRouter = require('./routes/auth/recherche.js');

const cors = require("cors");

// je configure l'application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

// je configure les routes
app.use('/auth', signupRouter);
app.use('/auth', rechercheRouter);

 // j'implémente la partie API
app.get("/", (req,res) => {
  res.send("youhou");
})

app.use(cors())

// route liste des users
app.get("/liste", (req, res) => {
  connection.query("SELECT * FROM users ORDER BY name ASC ",(err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération de la personnes");
    } else {
      res.json(results);
    }
  });
});

// route recherche users par email
app.get("/recherche/:id", (req, res) => {
  const formData = req.params.id;
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    formData,
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération");
      } else {
        res.json(results);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const formData = req.params.id;
  connection.query(
    "DELETE FROM users WHERE email = ?",
    formData,
    (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la suppression");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
  var  err  =  new  Error('Not Found');
  err.status  =  404;
  next(err);
});

//je lance le serveur node
let  server  =  app.listen( process.env.PORT  || 5000, function(){
  console.log('Listening on port '  +  server.address().port);
});