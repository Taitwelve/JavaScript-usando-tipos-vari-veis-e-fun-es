let saldo = 2000;
const deposito = 500;
const saque = 700;
const operacao = saldo + deposito - saque;

console.log("Saldo atual:", saldo);
console.log("Depósito:", deposito);
console.log("Saque:", saque);
console.log("Operação:", operacao);

//-------------------------------------------------

const valor1 = 10;
const resultado = valor1 % 2 === 0 ? 'O número é par.' : 'O número é ímpar.';
console.log(resultado);

//-------------------------------------------------------------------------------

const logado = true;
const admin = true;
const result = logado && admin;
console.log('Administrador logado no sistema:', result); 

//-------------------------------------------------------------------------------

const idade = false;
const peso = false;
const soma = idade || peso;
console.log('Soma de idade e peso:', soma);

//-------------------------------------------------------------------------------

const idadeMinina = 16;
const idadeUsuario = 20;

if (idadeUsuario >= idadeMinina) {
    console.log('Usuário pode acessar o conteúdo.');
}else {
    console.log('Usuário não pode acessar o conteúdo.');
}