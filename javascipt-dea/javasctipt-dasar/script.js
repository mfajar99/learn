// let usia = prompt('berpa usia kamu?');
// alert('usia anda adalah ' + usia);

// let nama = 'fajar'; // tipe string
// let usia = 26; // tipe integer number
// let tinggiBadan = 163.2; // tipe double float
// // let beratBadan
// let pacar = 2;

// beratBadan = 26;

// if (pacar == null) {
//    pacar = 'belum punya';
// } else {
//    pacar = 'udah punya';
// }


// let saldoAwal = 50000;
// let saldoTambahan = 80000;
// const hutang = 30000;
// const saldoAkhir = saldoAwal + saldoTambahan - hutang;

// const x = 9;
// const y = 2;
// const z = x / y

// alert(`niai x = ${x} / nilai y = ${y} maka hasilnya adalah ${z}`);

// alert(`nama saya ${nama} usia saya ${usia} tinggi badan saya adalah ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`);

// alert(`saldo awal saya Rp.${saldoAwal} dan saldo tamabahan yang akan saya miliki sebesar Rp.${saldoTambahan} jadi total yang saya miliki adalah sebanyak Rp.${saldoAkhir}`);

// switch (pacar) {
//    case 1:
//       pacar = 'punya 1 aja'
//       break;
//    case 2:
//       pacar = 'punya pacar 2, aku cukup playboy'
//       break
//    default:
//       pacar = 'belum punya pacar'
//       break;
// }

// Array
// let namaGuru = ['jodi', 'bunga', 'rahman'];
// namaGuru.push('dea', 'fikri'); // memasukan nilai baru
// namaGuru.shift(); // menghapus nilai awal
// namaGuru.pop(); // menghapus nali akhir
// alert(namaGuru);

// let namaGuru = []
// namaGuru[0] = 'dea'
// namaGuru[1] = 'fikri'
// namaGuru.pop()
// alert(namaGuru)


// for lop

// 3 statement

// for
// const namaGuru = ['dea', 'fikri', 'retno', 'bunga']
// for (let i = 0; i < namaGuru.length; i++) {
//    console.log(namaGuru[i]);
// }

// while
// let i = 10
// while (i < 10) {
//    i++
//    console.log('dea')
// }

// do while
// let i = 0
// do {
//    i++
//    console.log('dea')
// } while (i < 10)

// TUGAS KECIL 

/**
 1.promp untuk menentukan saldo akhir dari apa yang di inputkan oleh user
 2.menentukan hari dari tanggal yang ada saat ini di pc kalian
 */

// 1
let saldoAwal = 50000;
let saldoTambahan = Number(prompt(`sisa saldo kamu sekarang Rp.${saldoAwal} \nmasukan nominal`));
const saldoAkhir = saldoAwal + saldoTambahan;

alert(`saldo awal Rp.${saldoAwal} \nnominal baru Rp.${saldoTambahan} \nsaldo akhir kamu sekarang adalah Rp.${saldoAkhir}`);

// 2
const namaHari = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumaat', 'sabtu'];
const h = new Date();
let hari = namaHari[h.getDay()];

console.log("Hari ini adalah hari", hari);