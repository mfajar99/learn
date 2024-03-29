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

// menulis / menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
}
 
// menambahkan data contact baru
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
}

// cek nama yang duplikat
const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama === nama);
}

module.exports = { loadContact, findContact, addContact, cekDuplikat };