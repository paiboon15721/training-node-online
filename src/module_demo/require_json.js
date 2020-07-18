const _ = require('lodash')
const employees = require('../employees.json')

const results = employees
  .filter(v => v.role !== 'Manager')
  .reduce((acc, cur) => acc + cur.salary, 0)

// console.log(results)

const managers = employees.filter(v => v.role === 'Manager')

// console.log(managers)

const formattedEmployees = employees.map(v => ({
  fullName: `${v.name} ${v.lastName}`,
  ...v,
}))

// console.log(formattedEmployees)

const test = employees
  .filter(function (v) {
    return v.age > 40
  })
  .map(function (employee) {
    return {
      age: employee.age,
      text: `${employee.age} ${employee.name} ${employee.lastName}`,
    }
  })
  .reduce(function (acc, current) {
    return acc + current.age
  }, 0)

const arrowTest = employees
  .filter(v => v.age > 40)
  .map(v => ({
    age: v.age,
    text: `${v.age} ${v.name} ${v.lastName}`,
  }))
  .reduce((acc, current) => acc + current.age, 0)
console.log(arrowTest)

const employeesGroupByRole = _.groupBy(employees, 'role')

// console.log(employeesGroupByRole)
const summary = _.map(employeesGroupByRole, (v, k) => ({
  role: k,
  sumSaraly: _.sumBy(v, 'salary'),
}))

console.log(summary)

// const result = [
//   {
//     role: 'Technical',
//     sumSaraly: 200000,
//   },
//   ..._.
// ]
