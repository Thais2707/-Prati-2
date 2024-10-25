function inserir(valor){ 
    // Função que insere o valor pressionado (número ou operador) na tela da calculadora

    let tela = document.formulario.tela
    // Obtém o elemento da tela da calculadora (campo de exibição) para manipulação de seu valor

    if(tela.value.length < 14){
        // Limita a quantidade de caracteres na tela para no máximo 14, evitando que a tela fique muito cheia

        if(isOperador(valor) && isOperador(tela.value[tela.value.length - 1])){
            // Verifica se o valor inserido é um operador (como +, -, / ou *)
            // E se o último caractere já exibido na tela também é um operador
            // Se ambos forem operadores, impede a inserção para evitar operadores consecutivos, o que geraria erro
            return
        }
    }

    tela.value += valor
    // Se o valor passado for válido, ele é adicionado ao final do valor atual exibido na tela
}

function limparTela(){
    // Função que limpa completamente a tela da calculadora

    document.formulario.tela.value = ""
    // Define o valor da tela como uma string vazia, removendo todo o conteúdo mostrado
}

function deletar(){
    // Função que apaga o último caractere da tela da calculadora

    let tela = document.formulario.tela
    // Obtém a referência à tela da calculadora para acessar o valor exibido

    tela.value = tela.value.slice(0, -1)
    // Remove o último caractere da string atual da tela utilizando o método "slice", que corta a string
}

function calcularTotal(){
    // Função que avalia a expressão matemática completa (por exemplo, "2+3*4") e exibe o resultado

    let tela = document.formulario.tela
    // Obtém a referência à tela da calculadora

    const expressao = tela.value;
    // Armazena a expressão atual da tela (a sequência de números e operadores) em uma constante chamada "expressao"

    if(expressao && !isOperador(expressao[expressao.length - 1])){
        // Verifica se a expressão não está vazia e se o último caractere não é um operador
        // Isso evita tentar calcular uma expressão que termine com um operador, o que causaria erro

        try {
            let resultado = calcularExpressao(expressao) 
            // Tenta calcular o resultado da expressão chamando a função "calcularExpressao" que avalia a string

            tela.value = resultado
            // Exibe o resultado do cálculo na tela da calculadora
        } catch (error){
            // Caso ocorra um erro ao tentar calcular a expressão (por exemplo, se a expressão for inválida),
            // O código entra aqui, no bloco "catch"

            alert("Expressão inválida")
            // Exibe uma mensagem de alerta para o usuário informando que a expressão não pode ser calculada

            limparTela()
            // Limpa a tela da calculadora, apagando a expressão incorreta
        }
    }
}

function isOperador (char){
    // Função que verifica se o caractere fornecido (char) é um operador matemático (+, -, *, /)

    return ['+', '-', '/', '*'].includes(char)
    // Retorna "true" (verdadeiro) se o caractere estiver na lista de operadores, caso contrário, retorna "false"
}

function calcularExpressao(expressao){
    // Função que avalia a expressão matemática e retorna o resultado

    return eval(expressao)
    // O método "eval" executa a string como uma expressão de código JavaScript e retorna o valor calculado
    // Por exemplo, se a string for "2+3", o "eval" executa isso como código e retorna o valor 5
}
