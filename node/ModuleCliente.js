const moduleA = require('./ModuloA.js')// o uso de ./ é o caminho relativo.
const moduleB = require('./ModuleB.js')
console.log(moduleA.ola)
console.log(moduleA.bemVindo)
console.log(moduleA.ateLogo)
console.log(moduleB)
console.log(moduleB.bomDia)
console.log(moduleB.boaNoite())