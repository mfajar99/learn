// Core Modul
// File System
const fs = require('fs');

// menuliskan string ke file (synchronous)
// fs.writeFileSync('test.txt', 'Hello world secara sychronouse!');
// try {
//    fs.writeFileSync('data/test.txt', 'Hello world secara sychronouse!');
// } catch (e) {
//    console.log(e);
// }

// menuliskan string ke file (asychronous)
// fs.writeFile('data/test.txt', 'Hello world secara Asychronous', (e) => {
//    console.log(e);
// })

// membaca isi file (sychronouse)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca isi file (asychronouse)
// fs.readFile('datas/test.txt', 'utf-8', (err, data) => {
//    if (err) throw err;
//    console.log(data);
// });

// Readline
const readline = require('readline')
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
})

rl.question('Masukkan nama anda : ', (nama) => {
   rl.question('Masukkan nomer hp anda : ', (noHp) => {
      const contact = {nama, noHp}
      const file = fs.readFileSync('data/contacts.json', 'utf8')
      const contacts = JSON.parse(file)

      contacts.push(contact)

      fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
      
      console.log('Terimakasih sudah memasukkan data. ')

      rl.close()
   })
})