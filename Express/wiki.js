const express = require("express")
const app = express()
const router = app.router()

// Route vers la page d'accueil 

router.get("/", (req, res)=>{
    res.send("Page d'acceuil")
})