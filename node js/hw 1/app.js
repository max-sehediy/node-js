const http = require("http"),
  fs = require('fs'),
  path = require('path');


http.createServer(function (req, res) {

  let filePath = path.join(__dirname, 'pages', req.url == '/' ? 'index.html' : req.url)

  console.log(filePath);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'pages', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-type': 'text/html'
      })
      res.end(content)
    }
  })
})



  .listen(3000, "127.0.0.1", function () {
    console.log("Сервер начал прослушивание запросов на порту 3000");
  });