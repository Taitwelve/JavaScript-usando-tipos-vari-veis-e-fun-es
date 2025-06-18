// Exemplo de função simples
function somarDoisNumeros(numA, numB) {
    return numA + numB;
}
somarDoisNumeros(2, 2);
const resultado = somarDoisNumeros(2, 2);
console.log(resultado);

//----------------------------------------------------

// Exemplo de função com parâmetros

function dividir(dividendo, divisor) {
    return dividendo / divisor;
}
const result = dividir(10, 2);
console.log(`O resultado é ${result}`);

const resulta = dividir(2, 10);
console.log(`o resultado é ${resulta}`);

//----------------------------------------------------

// Exemplo de função sem retorno
function dividir(dividendo, divisor) {
    dividendo / divisor;
}

const valorFinal = dividir(10, 2);
console.log(`o resultado é ${valorFinal}`);