const express = require("express")
const app = express()

app.use(express.json())

app.use("/honeyDoList", require("./routes/honeyDoListRouter.js"))

app.listen(3000, () => {
    console.log("listening on 3000!")
})
