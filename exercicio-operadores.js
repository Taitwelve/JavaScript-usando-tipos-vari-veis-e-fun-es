// Exemplo de cálculo de resultado financeiro anual exercício:

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
console.log(`O resultado financeiro anual é: R$ ${resultado.toFixed(2)}`);

let resultadoCalculo;
resultadoCalculo = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log(`O resultado do cálculo é: ${resultadoCalculo.toFixed(2)}`);