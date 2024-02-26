const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts); // third party middlaware
app.use(express.static('public')); // build-in middleware

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
   const contacts = loadContact();

   res.render('contact', {
      title: 'Halaman Contact',
      layout: 'layouts/main-layout',
      contacts,
   });
});

app.get('/contact/:nama', (req, res) => {
   const contact = findContact(req.params.nama);
   
   res.render('detail', {
      title: 'Halaman Detail Contact',
      layout: 'layouts/main-layout',
      contact,
   });
});

app.use('/', (req, res) => {
   res.status(404);
   res.send('<h1>404</h1>');
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
