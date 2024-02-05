// Leve 1
// const arraySaya = ['😉', '🙌', '💋']; // 0, 1, 2  (index)

// console.log(arraySaya);

// Level 2
// const arrayKamu = [];
// arrayKamu[0] = '🌹';
// arrayKamu[1] = '🎉';
// arrayKamu[2] = '❤';

// console.log(arrayKamu);

// level 3
// const arrayKita = new Array();
// arrayKita[0] = '🌹';
// arrayKita[3] = '✨';
// arrayKita[1] = '🎂';
// console.log(arrayKita[1]);

// Level 4
// const arraySaya = ['🥑', '🍑', '🍐', '🍉', '🍊'];

// const semangka = arraySaya.includes('🍉');

// if (semangka) {
//    const posisiSemangka = arraySaya.indexOf('🍉');
//    const indexBefore = posisiSemangka - 1;
//    const indexAfter = posisiSemangka + 1;
//    const before = arraySaya[indexBefore];
//    const after = arraySaya[indexAfter];

//    console.log(`buah sebelum semangka adalah ${before}`);
//    console.log(`buah setelah semangka adalah ${after}`);
//    console.log(`buah semangka itu ada dan dia berada di posisi index ke - ${posisiSemangka}`);

// Level 5
//    // const buahAwal = arraySaya.shift();
//    const buahAwal = arraySaya[0];
//    console.log(`buah awal adalah ${buahAwal}`);

//    // const buahAkhir = arraySaya.pop();
//    const buahAkhir = arraySaya[arraySaya.length - 1];
//    console.log(`buah akhir adalah ${buahAkhir}`);
// } else {
//    console.log('saya tidak tahu dimana posisinya');
// }

// Level 6
// const arrySaya = [];

// arrySaya['alpukat'] = '🥑';
// arrySaya['jeruk'] = '🍊';

// console.log(arrySaya['jeruk']);


// Level 7
// const arraySaya = ['🍋', '🍌', '🍍', '🥭', '🍎', '🍇']; // Original
// // const newArraySaya = [...arraySaya] // KW
// // const newArraySaya = arraySaya.slice() // KW
// // const newArraySaya = Array.from(arraySaya) // KW
// const newArraySaya = JSON.parse(JSON.stringify(arraySaya)) // KW

// newArraySaya[0] = '🍕';

// console.log({ arraySaya });
// console.log({ newArraySaya });

// const arraySaya = ['🍋', '🍌', '🍍', '🥭', '🍎', '🍇']; // Original

// const arraySaya = [
//    '🍌',
//    10,
//    {
//       tomato: function () {
//          console.log('ini tomat')
//       },
//    },
//    ['eat', 'food']
// ];

// arraySaya[2].tomato();

// Level 8
// const arraySaya = ['🍋', '🍌', '🍍'];
// const arrayKamu = ['🍕', '🍔', '🌭'];

// const mergeArray = arraySaya.concat(arrayKamu);

// console.log(mergeArray);
// for (list of mergeArray) console.log(list);
// for (list in mergeArray) console.log(list);
// mergeArray.map((value, index) => console.log(index, value));

// const datas = [
//    {
//       name: 'Dea',
//       stack: 'JS',
//       age: 30,
//    },
//    {
//       name: 'Santi',
//       stack: 'PHP',
//       age: 24,
//    },
//    {
//       name: 'Budi',
//       stack: 'PY',
//       age: 20,
//    },
//    {
//       name: 'Joko',
//       stack: 'C++',
//       age: 35,
//    },
// ];

// datas.map((values, index) => {
//    console.log(values.name, values.stack);
// })

// datas.sort((a, b) => b.age - a.age).map((values) => console.log(values));

// datas.filter((x) => x.age >= 30).map((values) => console.log(values));

// datas
//    .sort((a, b) => a.age - b.age)
//    .filter((x) => x.age < 30)
//    .map((values) => console.log(values));