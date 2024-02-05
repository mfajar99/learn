const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
   command: 'add',
   describe: 'Menambahkan contact baru',
   builder: {
      nama: {
         describe: 'Nama lengkap',
         demandOptions: true,
         type: 'string',
      },
      email: {
         describe: 'Email',
         demandOption: false,
         type: 'string'
      },
      noHP: {
         describe: 'Nomer Handphone',
         damandOption: true,
         type: 'string',
      },
   },
   handler(argv) {
     contacts.simpanContact(argv.nama, argv.email, argv.noHP);
   },
}).demandCommand();

// menampilkan semua nama dan no hp contact
yargs.command({
   command: 'list',
   describe: 'Menampilkan semau nama dan no HP contact',
   handler() {
      contacts.listContact();
   },
});

// menampikan detail sebuah kontak
yargs.command({
   command: 'detail',
   describe: 'Menampilkan detail sebuah contact berdasarkan nama',
   builder: {
      nama: {
         describe: 'Nama lengkap',
         demandOptions: true,
         type: 'string',
      },
   },
  handler(argv) {
   contacts.detailContact(argv.nama);
  },
});

// menghapus cotact berdasarkan nama
yargs.command({
   command: 'delete',
   describe: 'Menghapus sebuah contact berdasarkan nama',
   builder: {
      nama: {
         describe: 'Nama lengkap',
         demandOptions: true,
         type: 'string',
      },
   },
  handler(argv) {
   contacts.deleteContact(argv.nama);
  },
});

yargs.parse();
