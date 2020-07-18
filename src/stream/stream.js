const fs = require('fs')
const path = require('path')

const url = path.join(__dirname, '..', 'employees.json')

const data = fs.createReadStream(url, {
  encoding: 'utf-8',
  highWaterMark: 10,
})

const copyUrl = path.join(__dirname, 'mycopyfile.json')

const file = fs.createWriteStream(copyUrl)

data.on('data', function (chunk) {
  // file.write(process.stdout)
  process.stdout.write(chunk)
  file.write(chunk.toUpperCase())
})
