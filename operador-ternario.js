const valor = 49;
const texto = valor < 50 ? 'Valor insuficiente' : 'Valor suficiente';
console.log(texto);

//-------------------------------------------------------------------------------

let matriculaAtiva = true;
function verificaMatriculaAtiva() {
    if (matriculaAtiva === true) {
        return 'Matrícula ativa no sistema';
    } else {
        return 'Matrícula não está ativa';
    }
}
console.log(verificaMatriculaAtiva());

// Refatorando a função verificaMatriculaAtiva usando operador ternário 
function verificaMatriculaAtiva() {
    return matriculaAtiva ? 'Matrícula ativa no sistema' : 'Matrícula não está ativa';
}
console.log(verificaMatriculaAtiva());

//+-------------------------------------------------------------------------------

let idadeEstudante = 21;
let precisaDeAutorizacao;

if (idadeEstudante < 18) {
    precisaDeAutorizacao = true;
} else {
    precisaDeAutorizacao = false;
}
console.log(precisaDeAutorizacao);

// Refatorando a verificação de autorização usando operador ternário
let idadeEstudante = 16;
const precisaDeAutorizacao = idadeEstudante < 18 ? true : false;
console.log(precisaDeAutorizacao); 
