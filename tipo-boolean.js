const estudante = "Fernando";
const aprovado = true;

if (aprovado === true) {
    console.log(`Parabéns, ${estudante}! Você foi aprovado! Boas festas!`);
}else {
    console.log(`Que pena, ${estudante}. Você não foi aprovado. Continue tentando, boas festas!`);
}

if (estudante === "Fernando") {
    console.log(`Boas vindas, ${estudante}!`);
} else {
    console.log(`Você não é o Fernando, quem é você?`);
}

 //Exemplos de coerção de tipos

let valorString = '10';
let valorNumero = 5;

let resultado = valorString + valorNumero;
console.log(resultado);