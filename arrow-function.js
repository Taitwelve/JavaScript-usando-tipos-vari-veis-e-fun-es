const estudanteReprovou = (notaFinal, faltas) =>{
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

const exibeNome = (nome) => nome.toUpperCase();

console.log(exibeNome('João da Silva'));
console.log(estudanteReprovou(5, 5));
console.log(estudanteReprovou(9, 2));   