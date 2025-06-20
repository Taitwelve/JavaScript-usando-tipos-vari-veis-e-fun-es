function exibeNomeEstudande(nome) {
    console.log("Meu nome é: " + nome);
}
exibeNomeEstudande('Taiane');
exibeNomeEstudande('João');
exibeNomeEstudande('Maria');
exibeNomeEstudande('Pedro');

//-------------------------------------------------------------------------------

function exibeInfosEstudante(nome, idade, curso, nota) {
    return(`Nome: ${nome}, Idade: ${idade}, Curso: ${curso} , Nota: ${nota}`);
}

console.log(exibeInfosEstudante('Taiane', 21, 'JavaScript', 9.5));
console.log(exibeInfosEstudante('João', 22, 'Python', 8.0));
console.log(exibeInfosEstudante('Maria', 20, 'Java', 7.5));
console.log(exibeInfosEstudante('Pedro', 23, 'C++', 6.0));

// Hoisting é o comportamento do JavaScript de mover declarações de funções para o topo do escopo atual. Isso significa que você pode chamar uma função antes de sua declaração no código, pois o JavaScript já a reconhece.
// Exemplo de Hoisting: 
function saudacao() {
    console.log("Olá, seja bem-vindo!");
}
saudacao(); 