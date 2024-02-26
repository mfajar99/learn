// Part 1
// document.title = 'fikri gobles';

// const body = document.body;
// body.append('<marquee>HELLOWORLD</marquee>');

// const h1 = document.createElement('h1'); // <h1></h1>
// h1.textContent = '<marquee>ANJAY INI H1 BRO</marquee>'; // <h>ANJAY INI H1 BRO</h>

// const namaSaya = document.createElement('p');
// namaSaya.innerHTML = '<marquee>DEA AFRIZAL</marquee>';

// const namaKamu = document.createElement('b');
// namaKamu.innerText = '<marquee>FIKRI GOBLES</marquee>';

// body.append(h1);
// body.append(namaSaya);
// body.append(namaKamu);

// Part 2
document.title = 'fikri gobles';

const body = document.body;
const btn1 = document.getElementById('btn1');
const btn = document.querySelector('button');

const defaultText = 'Klik Saya 1';
btn1.textContent = defaultText;

btn1.style.border = 'none';
btn1.style.padding = '8px';
btn1.style.fontSize = '24px';
btn1.style.background = 'tomato';


// console.log(btn);

// function gantiWarna() {
//    console.log('aman');
//    alert('aman');
// }


function clickButton() {
   btn1.style.background = 'aqua';
   const newText = document.createElement('p');
   newText.textContent = 'HALO BUNG! APA KABAR';
   newText.style.color = 'red';
   body.append(newText);
}

function ubahText() {
   btn1.textContent = 'hihihihi';
}

function oriText() {
   btn1.textContent = defaultText;
}


// TUGAS

// const body = document.body;
const body2 = document.body;
let newText2;

function blackText() {
   newText2 = document.createElement('p');
   newText2.textContent = 'HALO SAYA FAJAR';
   body2.append(newText2);
}

function colorText() {
   if (newText2) {
      newText2.style.color = 'blue';
   }
}

