let valor1 = '5';
let valor2 = 5;

let resultado1 = valor1 + valor2;
let resultado2;

if (valor1 === valor2) {
    resultado2 = 'Os valores são iguais.';
} else {
    resultado2 = 'Os valores são diferentes.';
}

console.log('Resultado 1:', resultado1);
console.log('Resultado 2:', resultado2);

//---------------------------------------------------------------

const numero = 10;
const resultado3 = (numero > 5 && numero < 15);
const resultado4 = (numero === 10 || numero > 20);
const resultado5 = !(numero < 5);

console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);
console.log("Resultado 5:", resultado5);