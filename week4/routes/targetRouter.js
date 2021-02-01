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


targetRouter.get("/:targetId", (req, res) => {
    const targetId = req.params.targetId 
    const foundTarget = targets.find(target => target._id === targetId)
    res.send(foundTarget)
    })

targetRouter.delete("/:targetId", (req, res) => {
    const targetId = req.params.targetId
    const targetIndex = targets.findIndex(target => target._id === targetId)
    targets.splice(targetIndex, 1)
    res.send("successfully eliminated a target")
})

targetRouter.put("/:targetId", (req, res) => {
    const targetId = req.params.targetId
    const targetIndex = targets.findIndex(target => target._id === targetId)
    const updatedTarget = Object.assign(targets[targetIndex], req.body)
    res.send(updatedTarget)
})

    module.exports = targetRouter
