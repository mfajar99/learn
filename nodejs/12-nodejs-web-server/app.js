const http = require('http');
const fs = require('fs');

const port = 3000;

const renderHTMl = (path, res) => {
   fs.readFile(path, (err, data) => {
      if (err) {
         res.writeHead(404);
         res.write('Error: file not found');
      } else {
         res.write(data);
      }
      res.end();
   });
};

http
   .createServer((req, res) => {
      res.writeHead(200, {
         'Content-Type': 'text/html',
      });

      const url = req.url;
      // cara 1
      switch (url) {
         case '/about':
            renderHTMl('./about.html', res);
            break;
         case '/contact':
            renderHTMl('./contact.html', res);
            break;
         default:
            renderHTMl('./index.html', res)
            break;
      }
      
      // cara 2
      // if (url === '/about') {
      //   renderHTMl('./about.html', res)
      // } else if (url === '/contact') {
      //   renderHTMl('./contact.html', res)
      // } else {
      //    renderHTMl('./index.html', res)
      // }
   })
   .listen(3000, () => {
      console.log(`Server is listening on port ${port}..`);
   });