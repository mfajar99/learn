const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')
const response = require('./response')

app.use(bodyParser.json())

app.get("/", (req, res) => {
  response(200, "API v1 ready to go", "SUCCES", res)
})

app.get("/mahasiswa", (req, res) => {
  const sql = "SELECT * FROM mahasiswa"

  db.query(sql, (err, fields) => {
    // console.log(fields);
    if (err) throw err
    response(200, fields, "mahasiswa get list", res)
  })
})

app.get("/mahasiswa/:nim", (req, res) => {
  const nim = req.params.nim
  const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`

  db.query(sql, (err, fields) => {
    // console.log(fields)
    if (err) throw err
    response(200, fields, "get detail mahasiswa", res)
  })
})

app.post("/mahasiswa", (req, res) => {
  const { nim, namaLengkap, kelas, alamat } = req.body

  const sql = `INSERT INTO mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (${nim}, '${namaLengkap}', '${kelas}', '${alamat}')`

  db.query(sql, (err, fields) => {
    if (err) response(500, "invalid", "error", res)
    // console.log({ f: fields.affectedRows });
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        id: fields.insertId
      }
      response(200, data, "Data Added Succesfully", res)
      // response(200, fields.insertId, "Data Added Succesfully", res)
      // console.log("data masuk");
    }
    // else {
    //   console.log("gak masuk");
    // }
  })
  // res.send("ok")
})

app.put("/mahasiswa", (req, res) => {
  const { nim, namaLengkap, kelas, alamat } = req.body
  const sql = `UPDATE mahasiswa SET nama_lengkap = '${namaLengkap}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = ${nim}`

  db.query(sql, (err, fields) => {
    // console.log(fields);
    if (err) response(500, "invalid", "error", res)
    if (fields?.affectedRows) {
      const data = {
        isSuccess: fields.affectedRows,
        message: fields.message
      }
      response(200, data, "Upadate data successfully", res)
    } else {
      response(404, "user not found", "error", res)
    }
  })
})

app.delete("/mahasiswa", (req, res) => {
  const { nim } = req.body
  const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`

  db.query(sql, (err, fields) => {
    if (err) response(500, "invalid", "error", res)
    // console.log(fields);
    if (fields?.affectedRows) {
      const data = {
        isDeleted: fields.affectedRows,
      }
      response(200, data, "Deleted Data Successfully", res)
    } else {
      response(404, "user not found", "error", res)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})