const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.json({
  //    nama: 'Fajar',
  //    email: 'fajar@gmail.com',
  //    noHP: '0813232332',
  // });
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  //   res.send('Ini adalah Halaman About');
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  //   res.send('Ini adalah Halaman Contact');
  res.sendFile('./contact.html', { root: __dirname });
});

app.get('/product/:id', (req, res) => {
   res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.category}`);
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const http = require('http');
// const fs = require('fs');

// const port = 3000;

// const renderHTMl = (path, res) => {
//    fs.readFile(path, (err, data) => {
//       if (err) {
//          res.writeHead(404);
//          res.write('Error: file not found');
//       } else {
//          res.write(data);
//       }
//       res.end();
//    });
// };

// http
//    .createServer((req, res) => {
//       res.writeHead(200, {
//          'Content-Type': 'text/html',
//       });

//       const url = req.url;
//       // cara 1
//       switch (url) {
//          case '/about':
//             renderHTMl('./about.html', res);
//             break;
//          case '/contact':
//             renderHTMl('./contact.html', res);
//             break;
//          default:
//             renderHTMl('./index.html', res)
//             break;
//       }

//       // cara 2
//       // if (url === '/about') {
//       //   renderHTMl('./about.html', res)
//       // } else if (url === '/contact') {
//       //   renderHTMl('./contact.html', res)
//       // } else {
//       //    renderHTMl('./index.html', res)
//       // }
//    })
//    .listen(3000, () => {
//       console.log(`Server is listening on port ${port}..`);
//    });
