let pessoas = [];
let totalMasculino = 0;
let totalFeminino = 0;
let somaAlturaMasculino = 0;

document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();  
    

    const altura = parseFloat(document.getElementById("altura").value);
    const genero = document.getElementById("genero").value;


    pessoas.push({ altura, genero });

    if (genero === "Masculino") {
        totalMasculino++;
        somaAlturaMasculino += altura;
    } else {
        totalFeminino++;
    }

  
    const alturas = pessoas.map(pessoa => pessoa.altura);
    const maiorAltura = Math.max(...alturas);
    const menorAltura = Math.min(...alturas);


    const mediaAlturaMasculino = totalMasculino > 0 ? somaAlturaMasculino / totalMasculino : 0;


    let resultadoHTML = `
        <p><strong>Maior Altura:</strong> ${maiorAltura} metros</p>
        <p><strong>Menor Altura:</strong> ${menorAltura} metros</p>
        <p><strong>Média de Altura Masculina:</strong> ${mediaAlturaMasculino.toFixed(2)} metros</p>
        <p><strong>Número de Mulheres:</strong> ${totalFeminino}</p>
    `;


    document.getElementById("resultados").innerHTML = resultadoHTML;

    document.getElementById("altura").value = '';
    document.getElementById("genero").value = 'Masculino';
});
