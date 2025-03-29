function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9; 
    } else {
        return valorTotal; 
    }
}

function calcularResumo() {
    var preco = parseFloat(document.getElementById("preco").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);


    if (isNaN(preco) || preco <= 0 || isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    var total = calcularTotal(preco, quantidade);
    var totalComDesconto = aplicarDesconto(total);

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Valor total antes do desconto: R$ ${total.toFixed(2)}</p>
        <p>Valor com desconto: R$ ${totalComDesconto.toFixed(2)}</p>
    `;
}