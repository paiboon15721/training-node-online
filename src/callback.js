const axios = require('axios')
const fs = require('fs')

function runGreet(func) {
  axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => {
    func(res.data.name)
  })
}

function greet() {
  console.log('Hi Hello world')
}

// runGreet(function (data) {
//   console.log(`hello ${data}`)
// })

const results = fs.readFileSync(`${__dirname}/index.js`)
// console.log(results.toString())
// console.log('test')

const myReadFile = fileUrl =>
  new Promise((resolve, reject) => {
    fs.readFile(fileUrl, (err, data) => {
      if (err) {
        return reject(err)
      }
      return resolve(data)
    })
  })

const app = async () => {
  const myFiles = ['index.js', 'koa.js', 'variables.js', 'objects.js']

  try {
    const results = await Promise.all(
      myFiles.map(file => myReadFile(`${__dirname}/${file}`)),
    )
    // const results = await Promise.all([
    //   myReadFile(`${__dirname}/index.js`),
    //   myReadFile(`${__dirname}/koa.js`),
    //   myReadFile(`${__dirname}/variables.js`),
    //   myReadFile(`${__dirname}/objects.js`),
    // ])

    console.log(results)
    // const indexData = await myReadFile(`${__dirname}/index.js`)
    // const koaData = await myReadFile(`${__dirname}/koas.js`)
    // console.log(indexData.toString())
    // console.log(koaData.toString())
  } catch (err) {
    console.log(`My error is ${err}`)
  }
}

app()

// myReadFile(`${__dirname}/index.js`)
//   .then(data => {
//     console.log(data.toString())
//     return myReadFile(`${__dirname}/koa.js`)
//   })
//   .then(data => {
//     console.log(data.toString())
//   })
//   .catch(console.log)

// fs.readFile(`${__dirname}/index.js`, function (err, data) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(data.toString())
// })

// console.log('Testtttt')

// const myReadFilePromise = fileUrl =>
//   new Promise((resolve, reject) => {
//     fs.readFile(fileUrl, (err, data) => {
//       if (err) {
//         return reject(err)
//       }
//       return resolve(data)
//     })
//   })

// const myReadFile2 = function (fileUrl) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(fileUrl, (err, data) => {
//       if (err) {
//         return reject(err)
//       }
//       return resolve(data)
//     })
//   })
// }

// myReadFile2()
//   .then(function (data) {
//     console.log(data.toString())
//   })
//   .catch(function (err) {
//     console.log(err)
//   })
