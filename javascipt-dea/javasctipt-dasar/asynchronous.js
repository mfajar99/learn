// Contoh 1

// function satu() {
//    console.log('satu');
// }
// function dua() {
//    console.log('function 2 mau di eksekusi...');
//    setTimeout(() => {
//       console.log('dua');
//    }, 3000)
// }
// function tiga() {
//    console.log('tiga');
// }

// satu();
// dua();
// tiga();

// Contoh 2

const token = ~~[Math.random() * 12345678]

const pictures = ['1.jpg, 2.jpg, 3.jpg']

function login(username) {
   return { token, username }
}

function getUser(token) {
   if (token) return { apiKey: 'xkey123' }
}

function getPictures(apiKey) {
   if (apiKey) return pictures
}

const user = login('dea_afrizal')
console.log(user.token)

const apiKey = getUser(user.token)
console.log(apiKey)

const getUserPicture = getPictures(apiKey)
console.log(getUserPicture);