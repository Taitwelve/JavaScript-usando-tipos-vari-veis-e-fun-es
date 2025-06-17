//exemplo de operadores lógicos
const notaFinal = 6;
const faltas = 2;
const advertencias = 0;

if (notaFinal < 8 || faltas > 4) {
    console.log("Reprovado");
} else {
    console.log("Aprovado");
}
if (faltas < 3 && !advertencias) {
    console.log("Recebeu bônus");
} else {
    console.log("Não recebeu bônus");
}

if (notaFinal < 7 && faltas > 4) {
    console.log("Reprovado");
} else {
    console.log("Aprovado");
}

//exemplo de operadores lógicos com negação
const nota = 9;
if (!(nota >= 7)) {
    console.log("Reprovado");
} else {
    console.log("Aprovado");
}