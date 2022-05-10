console.log('Trabalhando com variáveis.');

var a;

let b;

const c = 10;

console.log("sem alteração das variáveis...")
console.log(`var = ${a}, b = ${b}, c = ${c}`);//Print sem alteração das variáveis

a = 5;///alteração da variável a
console.log("alterada variavel a...")
console.log(`var = ${a}, b = ${b}, c = ${c}`);//Print com alteração da variável a

b = 20;//alteração da variável b
console.log("alterada variavel b...")
console.log(`var = ${a}, b = ${b}, c = ${c}`);//Print com alteração da variável b

