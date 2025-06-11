//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase em constras maiúsculas.
const frase = 'Esta é uma frase de exemplo.';
console.log(frase.length); 
console.log(frase.toUpperCase()); 


// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
const valorNull = null;
let valorUndefined;
console.log(typeof valorNull); 
console.log(typeof valorUndefined); 

//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

const numero = 42;
const texto = ' é a resposta.';
const booleano = true;
const combinacao = `${numero} ${texto} É verdade? ${booleano}`;
console.log(combinacao);

//Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

const numeroExemplo = 100;
const stringExemplo = '200';
const numeroParaString = String(numeroExemplo);
const stringParaNumero = Number(stringExemplo);
console.log(typeof numeroParaString); 
console.log(typeof stringParaNumero); 

//Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

const textoOriginal = 'Aprendendo JavaScript é divertido!';
const textoMaiusculo = textoOriginal.toUpperCase();
const textoMinusculo = textoOriginal.toLowerCase();
const textoFatiado = textoOriginal.slice(0, 25);
console.log(textoMaiusculo);
console.log(textoMinusculo);
console.log(textoFatiado);