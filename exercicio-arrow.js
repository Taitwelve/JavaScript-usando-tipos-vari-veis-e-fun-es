const calculadoraSimples = (a, b, operacao) => {
    if (operacao === 'soma') {
        return a + b;
    } else if (operacao === 'subtracao') {
        return a - b;
    } else if (operacao === 'multiplicacao') {
        return a * b;
    } else if (operacao === 'divisao') {
        return a / b;
    } else {
        return 'Operação não reconhecida';
    }
};

console.log(calculadoraSimples(10, 5, 'soma'));
console.log(calculadoraSimples(10, 5, 'subtracao'));
console.log(calculadoraSimples(10, 5, 'multiplicacao'));
console.log(calculadoraSimples(10, 5, 'divisao'));
console.log(calculadoraSimples(10, 5, 'modulo')); 