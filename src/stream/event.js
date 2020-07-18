const Emitter = require('events')

class Person extends Emitter {
  constructor(name) {
    super()
    this.name = name
  }

  greet() {
    console.log(`Hello ${this.name}`)
    // Api call, query
    const data = { secret: 'safa;sjkfl' }
    this.emit('greet', data)
  }
}

const john = new Person('John')
john.on('greet', function (data) {
  console.log(data)
})

john.greet()
john.greet()
john.greet()

// class Emitter {
//   constructor() {
//     this.events = {}
//   }

//   on(type, listener) {
//     this.events[type] = this.events[type] || []
//     this.events[type].push(listener)
//   }

//   emit(type) {
//     if (this.events[type]) {
//       this.events[type].forEach(function (listener) {
//         listener()
//       })
//     }
//   }
// }

// const eventEmitter = new Emitter()
// eventEmitter.on('query', function () {
//   console.log('save log')
// })

// eventEmitter.emit('query')

// eventEmitter.on('greet', function () {
//   console.log('hello')
// })

// eventEmitter.on('greet', function () {
//   console.log('hello world')
// })

// eventEmitter.emit('greet')
// eventEmitter.emit('greet')
// eventEmitter.emit('greet')
// eventEmitter.emit('greet')
