// console.log('Hellow Fajar');
// const nama = 'Muahammad Fajar';
// const cetakNama = (nama) =>  `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));
// console.log(window);

// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); //local module
// const moment = require('moment'); // third party module / npm module / node_modules

// const cetakNama = require('./coba');
// const PI = require('./coba');
const coba = require('./coba');

console.log(coba.cetakNama('Fajar'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang);
