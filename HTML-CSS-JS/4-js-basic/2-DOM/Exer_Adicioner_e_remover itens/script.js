let lista = document.getElementById("listaItens");
let mensagem = document.getElementById("mensagem");
let contador = 1;

function exibirMensagem(texto, cor) {
    mensagem.innerHTML = texto;
    mensagem.style.display = "block";
    mensagem.style.backgroundColor = cor;
}

function adicionarItem() {
    let novoItem = document.createElement("li");
    novoItem.innerHTML = `Item ${contador}`;
    lista.appendChild(novoItem);
    contador++;
    exibirMensagem("Item adicionado", "lightblue");
}

function removerItem() {
    if (lista.children.length > 0) {
        let indice = prompt("Digite o número do item que deseja remover:");
        let itemRemover = document.querySelector(`li:nth-child(${indice})`);

        if (itemRemover) {
            lista.removeChild(itemRemover);
            exibirMensagem("Item removido", "lightcoral");
        } else {
            alert("Item não encontrado!");
        }
    } else {
        exibirMensagem("Não há mais itens para remover", "grey");
    }
}
