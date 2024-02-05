const express = require("express")
const app = express()

app.get("/olivia", (req, res) => {
  res.send("hi saya olivia")
})

app.listen(80, () => console.log("server starting..."))