const http = require('http');
const convertRupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = '127.0.0.1';
const port = 3002;

// console.log(http);

// request adalah =  data masuk dari luar
// response adalah = data keluar dari sistem

const server = http.createServer(function (request, response) {
   const nama = "FAJAR";
   let uang = 500000;
   let jajan = 150000;
   let sisa = uang - jajan;

   uang = convertRupiah.convert(uang);
   jajan = convertRupiah.convert(jajan);
   sisa = convertRupiah.convert(sisa);

   fs.appendFile('sisaung.txt', sisa, () => {
      console.log('data uang anda berhasi disimpan');
   })

   const sisaRAM = os.freemem();
   const jumlahCPU = os.cpus();

   function checkCPU() {
      let myCPU = [];
      jumlahCPU.map((cpu, i) => {
         myCPU.push(cpu.model);
      });
      return myCPU[0];
   };
   // console.log(checkCPU());


   // sisaRupiah = convertRupiah.convert(sisa);
   // console.log('sisa rupiah: ', sisaRupiah);

   const hasil = `
   <head>
      <title>${nama}</title>
   </head>
   <body>
      <h1 style='background: black; color: white; text-align: center;'>NODE JS UANG JAJAN</h1>
      <p>
         Halo nama saya ${nama}. Saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}. 
      </p>
      <h5>sisa RAM PC saya: ${sisaRAM}</h5>
      <h5>merk CPU yang saya pake: ${checkCPU()}</h5>
   </body>
   `
   response.statusCode = 203;
   response.end(hasil);
});

server.listen(port, host, '', function () {
   console.log(`server menyala di ${host}:${port}`);
});


