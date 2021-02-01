const express = require("express")
const honeyDoRouter = express.Router()
const uuid = require("uuid")
const toyUrl ="https://images-na.ssl-images-amazon.com/images/I/91RFI0Z-65L._AC_SX466_.jpg"
const clothesUrl = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F04%2F13%2Fwhite-shelving-unit-filled-clothes-75437c4d.jpg"
const dustUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyLgIETktVjcci57IMKlEQScbo49guOT5XA&usqp=CAU"
const ovenUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXStIaPpXlDcDId05VEwuNNaswy2xEe_CpfA&usqp=CAU"
const dishesUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfifRxkTG26UBCH4goYdwhuZuzD5FNDAuziw&usqp=CA"



const honeyDoList = [
    {name: "toys", description: "organize toys", imageUrl: toyUrl, completed: false, _id: uuid.v4()},
    {name: "clothes", description: "wash the clothes", imageUrl: clothesUrl, completed: false, _id: uuid.v4()},
    {name: "dust", description: "dust the fan and tv", imageUrl: dustUrl, completed: false, _id: uuid.v4()},
    {name: "oven", description: "clean out the oven", imageUrl: ovenUrl, completed: false, _id: uuid.v4()},
    {name: "dishes", description: "put away dishes", imageUrl: dishesUrl, completed: false, _id: uuid.v4()}
]




honeyDoRouter.get("/", (req, res) => {
    res.send(honeyDoList)
})

honeyDoRouter.post("/", (req, res) => {
    const newChore = req.body
    newChore._id = uuid.v4()
    honeyDoList.push(newChore)
    res.send("Successfully added a new chore to the Honey-Do-List!!!!")
})

honeyDoRouter.get("/:honeyDoId", (req, res) => {
    const honeyDoId = req.params.honeyDoId
    const foundChore = honeyDoList.find(honeyDo => honeyDo._id === honeyDoId)
    res.send(foundChore)
})

honeyDoRouter.delete("/:honeyDoId", (req, res) => {
    const honeyDoId = req.params.honeyDoId
    const foundChore = honeyDoList.findIndex(honeyDo => honeyDo._id === honeyDoId)
    honeyDoList.splice(foundChore, 1)
    res.send("successfully removed a chore from the Honey-Do-List")
})

honeyDoRouter.put("/:honeyDoId", (req, res) => {
    const honeyDoId = req.params.honeyDoId
    const foundChore = honeyDoList.findIndex(honeyDo => honeyDo._id === honeyDoId)
    const updatedChore = Object.assign(honeyDoList[foundChore], req.body)
    res.send(updatedChore)
})




module.exports = honeyDoRouter