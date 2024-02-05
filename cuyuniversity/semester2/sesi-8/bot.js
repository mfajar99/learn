const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Halo, perkenalkan nama saya jakabot. siapa nama kamu?",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohh ${data?.usia}, hobi kamu apa ya?`,
    `wawww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
    `ohhh ${data?.pacar}, ya udah kalau gitu. udahan ya?`
  ];
}

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function bootStart() {
  init++;
  if (init === 1) {
    // console.log({ nama: jawaban.value });
    // setTimeout(() => {
    //   botDelay({ nama: jawaban.value });
    // }, 1200);
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    // setTimeout(() => {
    //   botDelay({ usia: jawaban.value });
    // }, 1200);
    // console.log({ usia: jawaban.value });
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    // setTimeout(() => {
    //   botDelay({ hobi: jawaban.value });
    // }, 1200);
    // console.log({ hobi: jawaban.value });
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    // setTimeout(() => {
    //   botDelay({ pacar: jawaban.value });
    // }, 1200);
    // console.log({ pacar: jawaban.value });
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd()
  }
}

function botDelay(jawabanUser) {
  // atau dengan cara ini
  // console.log({ userData: userData });
  // pertanyaan.innerHTML = botSay(jawabanUser)[init];
  // jawaban.value = "";
  console.log({ userData: userData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1200]);
  userData.push(jawaban.value);
  jawaban.value = ""
}

function finishing() {
  // console.log("finishing...");
  pertanyaan.innerHTML = `Thank u ya ${userData[0]} udah main ke jakabot 😉,
  kali-kali kita main ${userData[2]} bareng ya!`;
  jawaban.value = " siap thanks juga!";
}

function botEnd() {
  // console.log("bot end....");
  window.location.reload();
}