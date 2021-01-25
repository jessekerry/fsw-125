const express = require("express")
const targetRouter = express.Router()
const uuid = require("uuid")

const targets = [
    {firstName: "qui-gon", lastName: "jinn", alive: true, bounty: 50000, type: "jedi", _id: uuid.v4()},
    {firstName: "exar", lastName: "kun", alive: true, bounty: 700000, type: "sith", _id: uuid.v4()},
    {firstName: "satele", lastName: "shan", alive: true, bounty: 120000, type: "jedi", _id: uuid.v4()},
    {firstName: "kylo", lastName: "ren", alive: false, bounty: 800, type: "sith", _id: uuid.v4()}
]



targetRouter.get("/", (req, res) => {
        res.send(targets)
    })
    
targetRouter.post("/", (req, res) => {
        const newTarget = req.body
        newTarget._id = uuid.v4()
        targets.push(newTarget)
        res.send(" added a target to the targets array ")
    })


    module.exports = targetRouter
