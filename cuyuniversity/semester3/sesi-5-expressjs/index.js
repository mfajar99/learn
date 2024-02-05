const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

/**
  1. route path
  2. response
  3. file structure
*/

app.use(bodyParser.json())

app.get("/", (req, res) => {
  // res.send(404, "haha error")
  // res.json(404, "haha error")
  response(200, "ini data", "ini message", res)
})

app.get("/mahasiswa", (req, res) => {
  // res.send("list mahasiswa muncul")
  response(200, "mahasiswa get list", res)
})

app.get("/mahasiswa/:nim", (req, res) => {
  const id = req.params.nim
  // res.send(`spesifik mahasiswa by id ${id}`)
  response(200, `spesifik mahasiswa by id ${id}`, res)
})

app.post("/mahasiswa", (req, res) => {
  // res.send("INI POSTING")
  response(200, "INI POSTING", res)
})

app.put("/mahasiswa", (req, res) => {
  // res.send("INI PUT ATAU UPDATE DATA")
  response(200, "INI PUT ATAU UPDATE DATA", res)
})

app.delete("/mahasiswa", (req, res) => {
  // res.send("INI DELETE DATA")
  response(200, "INI DELETE DATA", res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})