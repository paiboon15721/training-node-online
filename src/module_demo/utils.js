function greet() {
  console.log('hello')
}

function greet2() {
  console.log('hello2')
}

// module.exports = { greet: greet, greet2: greet2 }
// module.exports.greet = greet
// module.exports.greet2 = greet2

// exports.greet = greet
// exports.greet2 = greet2

// exports.greet3 = () => console.log('hello 3')

module.exports = {
  greet: greet,
  greet2: greet2,
  greet3: () => console.log('hi'),
}
