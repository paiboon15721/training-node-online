const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>hello world update test feature!!</h1>')
  } else if (req.url === '/api') {
    const data = { name: 'myname', lastName: 'mylastname' }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  }
})

server.listen(3000, () => {
  console.log('Server listen on port 3000')
})
