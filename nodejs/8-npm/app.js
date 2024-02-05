const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('fajar@gmail.com'));
// console.log(validator.isMobilePhone('0812344564', 'id-ID'));
// console.log(validator.isNumeric('0812344564'));

console.log(chalk.italic.bgBlue.red('Hello World!'));
const nama = "Fajar";
const pesan = chalk`{bgMagenta.blue.bold Lorem ipsum dolor} {bgCyan sit amet} {bgYellow.red consectetur adipisicing elit.} {bgRed Deserunt voluptates} quod distinctio! Nama saya : ${nama}`;
console.log(pesan);