const estudante = "Caroline";
const docente = 'Dr. Silva';
const cumprimento = 'Nosso lema é "Conhecimento é poder"';
const citacao = "Ju diz: 'Vamos aprender juntos!'";

console.log (cumprimento);
console.log(citacao);
console.log(`Boas vindas, ${estudante}!`);

//Template Strings
const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(`A senha é: ${senha}`);

//Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
