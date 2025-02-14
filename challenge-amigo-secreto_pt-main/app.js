//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const participantes = [];//array com nomes de amigos

function adicionarAmigo() {
    const input = document.getElementById("amigo");//Esse código seleciona o elemento HTML com o ID "amigo"e o armazena na variavel input.
    const nome = input.value.trim();//captura o valor digitado no campo de texto, removendo espaços extras

    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        atualizarLista();
        input.value = ""; // Limpa o campo após adicionar
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = ""; 
    participantes.forEach(nome => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}
function sortear() {
    if (participantes.length < 2) {
        alert("Adicione pelo menos 2 participantes para sortear!");
        return;
    }

    let sorteio = [...participantes];
    let resultado = [];

    for (let i = 0; i < participantes.length; i++) {
        let indice;
        do {
            indice = Math.floor(Math.random() * sorteio.length);
        } while (sorteio[indice] === participantes[i]);

        resultado.push({ amigo: participantes[i], sorteado: sorteio[indice] });
        sorteio.splice(indice, 1);
    }

    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(par => {
        const item = document.createElement("li");
        item.textContent = `${par.amigo} → ${par.sorteado}`;
        listaResultado.appendChild(item);
    });
}