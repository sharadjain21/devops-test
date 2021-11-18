var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  //res.write('Hi there!! I\'m being served from ' + os.hostname())
  res.write('Chinu')
  res.end()
}

http.createServer(handleRequest).listen(8081)



