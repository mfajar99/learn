// Cara 1
// function addName(firstName, lastname) {
//    console.log('nama depan:', firstName);
//    console.log('nama marga:', lastname);
// }

// addName('dea gobles', 'margodoso');

// Cara 2
// function addName() {
//    console.log('name depan:', arguments[0]);
//    console.log('name marga:', arguments[1]);
// }

// addName('dea gobles', 'margodoso');

// Cara 3
// function addName() {
//    for (let i = 0; i < arguments.length; i++) {
//       console.log('nama lengkap: ', arguments[i]);
//    }
// }

// addName('dea gobles', 'margodoso');

// Cara 4
// const fullname = function addName(firstname, lastname) {
//    console.log(firstname, lastname);
// }

// fullname('dea gobles', 'fikri gobles');

// Cara 5
// const fullname = function addName(firstname, lastname) {
//    console.log(firstname, lastname);
// }

// fullname('dea gobles', 'fikri gobles');

// Cara 6
// const sum = new Function('x', 'y', 'console.log(x+y)');
// sum(5, 5);

// cara 1 - keyword new function
// const sum1 = new Function('x', 'y', 'console.log(x+y)');

// cara 2 - standart funtion
// function sum2(x, y) {
//    console.log(x + y);
// }

// cara 3 - arrow fucntion
// const sum3 = (x, y) => {
//    console.log(x + y);
// }

function randomize() {
  const randomNumber = ~~(Math.random() * 1000);
  if (randomNumber > 200) {
    console.log('wow lebih dari 200', randomNumber);
  } else {
    console.log(randomNumber);
  }
}

// randomize();

// sum1(1, 1);
// sum2(2, 2);
// sum3(3, 3);

/**
 TUGAS BESAR:
 1. MEMBUAT PERHITUNGAN MATEMATIKA
   -luas lingkaran
   -luas segitiga
   -luas persegi panjang
   -luas jajar genjang
 2. menghitung total gaji yang di dapat dalam satu bulan dengan input minimal:
   -nama karyawan
   -gaji perhari
   -jumlah hari masuk kerja
 */

// TUGAS 1
// luas lingkaran
function luas_l(r) {
  const phi = 3.14; // atau 2 / 7
  L = phi * (r * r);
  return L;
}

let r = 7;
let luas_lingkaran = luas_l(r);
console.log(`luas lingkaran dengan jari-jari ${r} adalah: ` + luas_lingkaran);

// luas segitiga
function luas_s(alas, tinggi) {
  let luas_segitiga = 0.5 * alas * tinggi;
  return `luas segitiga yang mempunayai alas: ${alas} dan tinggi ${tinggi} adalah ${luas_segitiga}`;
}

let alas = 5;
let tinggi = 10;
console.log(luas_s(alas, tinggi));

// luas persegi panjang
function luas_p(panjang, lebar) {
  let luas_persegi_panjang = panjang * lebar;
  return `luas persegi panjang yang mempunayi panjang: ${panjang} dan lebar ${lebar} adalah ${luas_persegi_panjang}`
}

let panjang = 2;
let lebar = 2;
console.log(luas_p(panjang, lebar));

// luas jajar genjang
function luas_j(alas_j, tinggi_j) {
  let luas_jajar_genjang = alas_j * tinggi_j;
  return `luas jajar genjang yang mempunyai alas ${alas_j} dan tinggi ${tinggi_j} adalah ${luas_jajar_genjang}`;
}

let alas_j = 4;
let tinggi_j = 5;
console.log(luas_j(alas_j, tinggi_j));

// TUGAS 2

let namaKaryawan = prompt('Nama karyawan');
let gajiPerhari = prompt('Gaji pehari');
let jumlahHariKerja = prompt('Jumlah hari kerja dalam satu bulan');

// Konversi input menjadi angka
jumlahHariKerja = parseInt(jumlahHariKerja);
gajiPerhari = parseInt(gajiPerhari)

function gajiBulanan() {
  // Hitung total gaji
  const totalGaji = gajiPerhari * jumlahHariKerja;
  return 'Nama karyawan: ' + namaKaryawan + ' dan gaji bulan ini: Rp.' + totalGaji;
}

const body = document.body;
body.append(gajiBulanan());



