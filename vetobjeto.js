function funcao(){
    for(var i=0; i<5; i++){
    var objeto = {}
    var vet = []
    // Coloca os dados no objeto
    objeto.codigo = Number(prompt("Informe o código: "))
    objeto.nome = prompt("Informe o nome: ")
    objeto.qtde = Number(prompt("Informe a quantidade: "))
    objeto.preco = Number(prompt("Informe o preço: "))
    // Coloca objeto no vetor
    vet.push(objeto)
    }

    var estoque = 0
    for(var i=0; i<5; i++){
        estoque = estoque + vet[i].qtde
    }
    alert("Quantidade de estoque: " + estoque)

}