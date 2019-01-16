const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");

router.get("/recherche", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération users");
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
