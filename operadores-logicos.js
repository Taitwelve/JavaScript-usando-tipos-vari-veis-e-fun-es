//exemplo de operadores lógicos
const notaFinal = 6;
const faltas = 3;

if (notaFinal < 8 || faltas > 4) {
    console.log("Reprovado");
} else {
    console.log("Aprovado");
}

if (notaFinal < 7 && faltas > 4) {
    console.log("Reprovado");
} else {
    console.log("Aprovado");
}

