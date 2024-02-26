const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
});

// // Menambah 1 Data
// const contact1 = new Contact({
//    nama: 'Andi Law',
//    nohp: '0812123333',
//    email: 'andi@gmail.com',
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));