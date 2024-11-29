const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
let pathurl = "./users.json";
const router = express.Router();

let users = [];

if (fs.existsSync(pathurl)) {
  users = JSON.parse(fs.readFileSync(pathurl));
}

router.get("/:id", (req, res) => {
  let { id } = req.params;

  console.log(id);
  console.log(users);

  let filteredUsers = users.filter((user) => {
    return (
      (Number(id) && user.id == Number(id)) ||
      (id && user.nom == id) ||
      (id && user.prenom == id)
    );
  });
  if (filteredUsers.length > 0) {
    res.status(200).json(filteredUsers);
  } else {
    res.status(200).send("utilisateur non trouve");
  }

  let prenom = req.query.prenom;
  let nom = req.query.nom;

  console.log(prenom, nom);

  if (!prenom && !nom) {
    return res.status(200).json(users);
  }

  filteredUsers = users.filter((user) => {
    return (nom && user.nom == nom) || (prenom && user.prenom == prenom);
  });

  if (filteredUsers.length > 0) {
    return res.status(200).json(filteredUsers);
  }

  return res.status(404).send("Utilisateur non trouvé");

});

router.get("/", (req, res) => {
  let prenom = req.query.prenom;
  let nom = req.query.nom;

  console.log(prenom, nom);

  if (!prenom && !nom) {
    return res.status(200).json(users);
  }

  let filteredUsers = users.filter((user) => {
    return (nom && user.nom == nom) || (prenom && user.prenom == prenom);
  });

  if (filteredUsers.length > 0) {
    return res.status(200).json(filteredUsers);
  }

  return res.status(404).send("Utilisateur non trouvé");
});

module.exports = router;
