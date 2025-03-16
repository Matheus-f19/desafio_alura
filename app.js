let amigos = []

function adicionarAmigo () {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome ja foi adicionado.");
        return;
    }

    amigos.push(nome);
    exibirAmigos();
    inputAmigo.value = "";
    inputAmigo.focus();

}

function exibirAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigos) => {
        const li = document.createElement("li");
        li.textContent = amigos;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];

    const li = document.createElement("li");
    li.textContent = `Amigo secreto: ${amigoSorteado}`;
    resultado.appendChild(li)
}