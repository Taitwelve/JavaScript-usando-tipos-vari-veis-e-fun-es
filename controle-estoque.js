// Este código é um exemplo de controle de estoque para um produto específico.
let estoqueProdutoA = 50;
function realizarVenda(quantidade) {
    if (quantidade > estoqueProdutoA) {
        console.log("Quantidade insuficiente em estoque.");
    } else {
        estoqueProdutoA -= quantidade;
        console.log(`Venda realizada com sucesso. Novo estoque: ${estoqueProdutoA}`);
    }
}


let estoqueProdutoB = 100;
function adicionarEstoque(quantidade) {
    estoqueProdutoB += quantidade;
    console.log(`Estoque atualizado. Novo estoque: ${estoqueProdutoB}`);
}
function removerEstoque(quantidade) {
    if (quantidade > estoqueProdutoB) {
        console.log("Quantidade insuficiente em estoque para remoção.");
    } else {
        estoqueProdutoB -= quantidade;
        console.log(`Estoque atualizado. Novo estoque: ${estoqueProdutoB}`);
    }
}
