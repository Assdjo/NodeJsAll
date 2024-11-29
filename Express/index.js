const express = require('express')
const path = require('path')

// basename()

const monchemin = "/users/john/fichier.text"
const base = path.basename(monchemin)

console.log(base);

// dirname

const dir = path.dirname(monchemin)

console.log(dir);
