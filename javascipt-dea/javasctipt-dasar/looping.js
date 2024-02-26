/**
 PERULANGAN DI JAVASCTIPT
 ? for, for of, for in, foreach
 * while & do while
 */

// for (let z = 1; z <= 10; z++) {
//    if (z % 2 !== 0) console.log('data ke -', z);
// }

// let x = 1;
// while (x <= 10) {
//    if (x % 2 !== 0) {
//       console.log('data x ke - ', x);
//    }
//    x++
// }

// let y = 1;
// do {
//    if (y % 2 !== 0) {
//       console.log('data y ke - ', y);
//    }
//    y++
// } while (y <= 10)

// for (let z = 1; z <= 5; z++) {
//    console.log('data ke -', z);
// }

// let x = 1;
// while (x <= 5) {
//    console.log('data x ke - ', x);
//    x++
// }

// let y = 1;
// do {
//    console.log('data y ke - ', y);
//    y++
// } while (y <= 5)

// data ke - 1 ----------------- z = 2
// data ke - 2 ----------------- z = 3
// data ke - 3 ----------------- z = 4
// data ke - 4 ----------------- z = 5
// data ke - 5 -----------------
// z = 6 karena sudah lebih dari sama dengan 5
// 👇👇👇👇👇
// end of loop tidak akan masuk

// TUGAS
/**
 1. BUAT PERULANGAN DARI SUATU VARIABLE BERTIPE ARRAY
 contoh x = [3, 5, 12];
 loop data
 total nilai adalah 20 karena 3 + 5 + 12 = 20

 LOOPING DATA TERSEBUT MENGGUNAKAN for, while & do while dan munculkan juga jumlah hasil penambahan semua angka yang ada di dalam array tersebut seperti pada contoh
 */

//  Menggunakan For
// // Mendefinisikan array 'x' dengan elemen [3, 5, 12].
// let x = [3, 5, 12];

// // Mendefinisikan variabel 'total' dan menginisialisasinya dengan nilai 0.
// let totalX = 0;

// // Memulai perulangan 'for' untuk mengakses setiap elemen dalam array 'x'.
// // Variabel 'i' digunakan sebagai indeks perulangan, dimulai dari 0.
// // Perulangan akan terus berjalan selama 'i' kurang dari panjang array 'x'.
// for (let i = 0; i < x.length; i++) {
//    // Menambahkan nilai dari setiap elemen array ke dalam variabel 'total'.
//    totalX += x[i];
// }

// // Menampilkan hasil penjumlahan semua elemen array 'x' menggunakan 'console.log'.
// console.log("Total nilai menggunakan for loop: " + totalX);

// Menggunakan while
// let y = [3, 5, 12];
// let totalY = 0;
// let i = 0;

// while (i < y.length) {
//    totalY += y[i];
//    i++
// }

// console.log("Total nilai menggunakan while loop: " + totalY);

// Menggunakan do wihle
// let z = [3, 5, 12];
// let totalZ = 0;
// let i_z = 0;

// do {
//    totalZ += z[i_z];
//    i_z++
// } while (i_z < z.length)

// console.log("Total nilai menggunakan while loop: " + totalZ);


// PART 2
const pacarSaya = ['agnes', 'putri', 'marino', 'anggela', 'vexana'];

console.log(pacarSaya);

// for (let pacar in pacarSaya) {  // in - off
//    console.log(pacar);
// }

pacarSaya.forEach((pacar, index) => { // forEach - map
   console.log(pacar, index);
})
