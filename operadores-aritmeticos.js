// Operadores Aritméticos

const notaPrimeiroBimestre = 9;
const notaSegundoBimestre = 7.3;
const notaTerceiroBimestre = 7;
const notaQuartoBimestre = 8.3;

let media = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

if (media >= 7) {
    media +=media * 0.1; // Aumenta a média em 10% se for maior ou igual a 7
}


console.log(`A média é: ${media.toFixed(2)}`);