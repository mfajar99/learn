const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'wpu';

const client = new MongoClient(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

client.connect((error, client) => {
   if (error) {
      return console.log('Koneksi gagal!');
   }
   // console.log('Koneksi berhasil!');

   // pilih database
   const db = client.db(dbName);

   // menambahkan 1 data ke collection mahasiswa
   // db.collection('mahasiswa').insertOne(
   //    {
   //       nama: 'Erik',
   //       email: 'erik@gmail.com',
   //    },
   //    (error, result) => {
   //       if (error) {
   //          return console.log('gagal menambahkan data!');
   //       }
   //       console.log(result);
   //    }
   // )

   // menambahkan lebih dari 1 data
   // db.collection('mahasiswa').insertMany(
   //    [
   //       {
   //          nama: 'Fared',
   //          email: 'fared@gmail.com',
   //       },
   //       {
   //          nama: 'Salam',
   //          email: 'salam@gmail.com',
   //       }
   //    ],
   //    (error, result) => {
   //       if (error) {
   //          return console.log('data gagal ditambahkan!');
   //       }

   //       console.log(result);
   //    }
   // );

   // menampilkan semua data yang ada di collection 'mahasiswa'
   // console.log(
   //    db
   //       .collection('mahasiswa')
   //       .find()
   //       .toArray((error, result) => {
   //          console.log(result);
   //       })
   // );

   // menampilkan data bedasarkan kriteria yang ada di collection 'mahasiswa'
   // console.log(
   //    db.collection('mahasiswa')
   //       .find({ _id: ObjectId('647411d27f6c402fcd0783b5') })
   //       .toArray((error, result) => {
   //          console.log(result);
   //       })
   // );

   // mengubah data berdasarkan id
   // const updatePromise = db.collection('mahasiswa').updateOne(
   //    {
   //       _id: ObjectId('64741bdf0146b402c81fff72'),
   //    },
   //    {
   //       $set: {
   //          email: 'salam@yaoo.com',
   //       },
   //    }
   // );

   // updatePromise
   //    .then((result) => {
   //       console.log(result);
   //    })
   //    .catch((error) => {
   //       console.log(error);
   //    })

   // mengubah data lebih dari 1, berdasarkan kriteria
   // db.collection('mahasiswa').updateMany(
   //    {
   //       nama: 'Fared',
   //    },
   //    {
   //       $set: {
   //          nama: 'Fared Joss'
   //       },
   //    }
   // );

   // menghapus 1 data
   // db.collection('mahasiswa')
   //    .deleteOne({
   //       _id: ObjectId('6474198b2a56da24648aa0fa'),
   //    })
   //    .then((result) => {
   //       console.log(result);
   //    })
   //    .catch((error) => {
   //       console.log(error);
   //    });

   // menghapus lebih dari 1 data
   db.collection('mahasiswa')
      .deleteMany({
         nama: 'Budi Aja',
      })
      .then((result) => {
         console.log(result);
      })
      .catch((error) => {
         console.log(error);
      });
});