const fs = require('fs');

// membuat folder data
const dirPaht = './data';
if (!fs.existsSync(dirPaht)) {
  fs.mkdirSync(dirPaht);
}

// memubuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// ambil semua data di contact.json
const loadContact = () => {
   const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
   const contacts = JSON.parse(fileBuffer);
   return contacts;
}

// cari contact beradasarkan nama
const findContact = (nama) => {
   const contacts = loadContact();
   const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
   return contact;
}

module.exports = { loadContact, findContact };