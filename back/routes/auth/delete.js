const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");

router.delete("/delete", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression de l'users");
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
