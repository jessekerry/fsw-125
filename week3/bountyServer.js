const express = require("express")
const app = express()


app.use(express.json())



app.use("/targets", require("./routes/targetRouter.js")) 


app.listen(3000, () => {
    console.log("listening on 3000")
})