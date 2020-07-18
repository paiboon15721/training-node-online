const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)

const app = async () => {
  const data = await readFile(`${__dirname}/event.js`)
  console.log(data.toString())
}

app()
