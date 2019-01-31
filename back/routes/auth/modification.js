const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db");

router.post("/modification", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification du Wilders");
    } else {
      res.status(200).json({ flash: "Modification de votre Wilder  !" });
    }
  });
});

module.exports = router;



