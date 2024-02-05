const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Gunakan ejs
app.set('view engine', 'ejs');

// Third-party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Build-in middleware
app.use(express.static('public'));

// Application level middleware
app.use((req, res, next) => {
   console.log('Time: ', Date.now());
   next();
});

app.use((req, res, next) => {
   console.log('ini middleware berikutnya');
   next();
});

app.get('/', (req, res) => {
   const mahasiswa = [
      {
         nama: 'Muhammad Fajar',
         email: 'fajar@gmail.com',
      },
      {
         nama: 'Budi Aja',
         email: 'budi@gmail.com',
      },
      {
         nama: 'Joko Wi',
         email: 'joko@gmail.com',
      },
   ];
   res.render('index', {
      nama: 'Muhammad Fajar',
      layout: 'layouts/main-layout',
      title: 'Halaman Home',
      mahasiswa,
   });
});

app.get('/about', (req, res) => {
   res.render('about', { 
      layout: 'layouts/main-layout',
      title: 'Halaman About', 
   });
});

app.get('/contact', (req, res) => {
   res.render('contact', {
      layout: 'layouts/main-layout',
      title: 'Halaman Contact',
   });
});

app.get('/product/:id', (req, res) => {
   res.send(
      `Product ID : ${req.params.id} <br> Category : ${req.query.category}`
   );
});

app.use('/', (req, res) => {
   res.status(404);
   res.send('<h1>404</h1>');
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
