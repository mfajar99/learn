// PEMANASAN 1
// const myName = "Fajar";
// let myAdress = 'Jalan masjid jamik no.2';

// myAdress = 'Jalan masjid jamik no.4'

// console.log(myName);
// console.log(myAdress);

// PEMANASAN 2
// const myName = "Fajar";
// let myAdress = 'Jalan masjid jamik no.2';

// function getDetailHuman() {
//    console.log(`nama saya ${myName} dan alamat saya di ${myAdress}.`);
// }

// getDetailHuman();

// PEMANASAN 3
// const myName = "Fajar";
// let myAdress

// function getDetailHuman(data1, data2) {
//    console.log(`nama saya ${data1} dan alamat saya di ${data2}.`);
// }

// getDetailHuman("lalala", 12345);

// PEMANASAN 4
// const myName = "Fajar";
// let myAdress

// function getDetailHuman(data1, data2) {
//    console.log(`nama saya ${data1} dan alamat saya di ${data2}.`);
// }

// myAdress = "jalan buddakan..."

// getDetailHuman(myName, myAdress);

// PEMANASAN 5
// const myName = "Fajar";
// let myAdress = "jalan buddakan...";
// let i = 0;

// function getDetailHuman(data1, data2) {
//    i += 1;
//    console.log(`nama saya ${data1} dan alamat saya di ${data2}.`);
//    console.log(`function di panggil sebanyak ${i} kali`);
// }

// getDetailHuman(myName, myAdress);

// PEMANASAN 6
// let i = 0;

// function getDetailHuman() {
//    i += 1;
//    console.log(`function di panggil sebanyak ${i} kali`);
// }

// PEMANASAN 7
// let i = 0;

// standart function
// function getDetailHuman() {
//    i += 1;
//    if (i > 5) {
//       console.log('lebih dari 5x di klik');
//    } else {
//       console.log('jatah klik masih ada');
//    }
// }

// arrow function
// const getDetailHuman2 = () => {
//    i += 1;
//    i > 5 ? console.log('lebih dari 5x b ro human2') : console.log('jatah masih ada human2');;
// }

// object
// const datas = {
//    nama: 'fajar',
//    alamat: 'nepa',
//    usia: 26,
//    pekerjaas: "programmer"
// }

// console.log(datas.alamat);

// PEMANASAN 8
// const datas = {
//    nama: 'fajar',
//    alamat: 'nepa',
//    usia: 26,
//    pekerjaas: "programmer"
// }

// function getDetailData() {
//    console.log(`data yang anda cari adalah: ${datas.usia}`);
// }

// PEMANASAN 9
// const mahasiswa = [
//    {
//       nama: 'fajar',
//       alamat: 'nepa',
//       usia: 26,
//       semester: 6
//    },
//    {
//       nama: 'samsol',
//       alamat: 'seneng',
//       usia: 30,
//       semester: 8
//    }
// ]

// function getDetailData() {
//    // mapping pake map
//    // mahasiswa.map(function (result, i) {
//    //    console.table(result);
//    // });

//    // mapping pake forEach
//    mahasiswa.forEach(result => {
//       console.table(result);
//    });

//    // console.log(`data yang anda cari adalah: ${mahasiwa}`);
// }

// PEMANASAN CLASS
class Hewan {
   warna
   keahlian
   constructor(nama) {
      this.nama = nama;
   }

   set newColor(color) {
      this.warna = color;
   }

   set newSkill(skill) {
      this.keahlian = skill;
   }

   get detail() {
      return `Hi saya ${this.nama}, saya berwarna ${this.warna} dan keahlian saya ${this.keahlian}`
   }
}

const kucing = new Hewan('jojo');
kucing.newColor = "red";
kucing.newSkill = "Menggonggong";

console.log(kucing.detail);