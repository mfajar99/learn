const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

// routes / URL / endpoint utama kita method GET

app.use(bodyParser.json())

app.get('/', (req, res) => {
  const sql = "SELECT * FROM mahasiswa"
  db.query(sql, (error, result) => {
    // hasil data dari mysql
    // console.log(result)
    // response.send(result)
    response(200, result, "get all data from mahasiswa", res)
  })
})

app.get('/find', (req, res) => {
  // console.log({ urlParam: req.query })
  // res.send('Hello World!')
  console.log('find nim: ', req.query.nim)

  const sql = `SELECT nama_lengkap FROM mahasiswa WHERE nim = ${req.query.nim}`
  db.query(sql, (error, result) => {
    response(200, result, "find mahasiswa name", res)
  })
})

app.post('/login', (req, res) => {
  // console.log(req.body);
  console.log({ requestFromOutside: req.body })
  res.send('login berhasil')
})

app.put('/username', (req, res) => {
  console.log({ updateData: req.body })
  res.send('update berhasil')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})