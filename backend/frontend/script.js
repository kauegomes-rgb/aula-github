async function carregarDados() {

    const url = "https://localhost:3000/";
    const resposta = await fetch(url);

    const produtos = await resposta.json();

    const listaProdutos = document.getElementById("lista-produtos");

    listaProdutos.innerHTML = `
    <div class="card">
        <h2>${produto.nome}</h2>
        <p class="categoria">${produto.categoria}</p>
        <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
    </div>
    `;
}

carregarDados();