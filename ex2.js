function funcao() {
    var vet = {}
    for (var i=0; i<3; i++){
        var objeto = {}
        // Coloca dados no objeto
        objeto.salario = Number(prompt("Salario: "))
        objeto.idade = Number(prompt("Idade: "))
        objeto.filhos = Number(prompt("Filhos: "))
        objeto.sexo = Number(prompt("Sexo: "))
        // Coloca objetos no vetor
        vet.push(objeto)

    }
    var somaSalario = 0;
    var somaFilhos = 0;
    var maiorSalario = vet[0].salario;
    var qtde = 0;
    for (var i=0; i<vet.lenght; i++){
       somaSalario = somaSalario + vet[i].salario
       somaFilhos = somaFilhos + vet[i].filhos
       if (vet[i].salario > maiorSalario){
           maiorSalario = vet[i].salario
       }
       if ((vet[i].sexo == "F") && (vet[i].salario > 1000)){
            qtde++
       }
    }
}
alert("Media: " + somaSalario/vet.lenght +
 "\nFilhos: " + somaFilhos/vet.lenght + 
 "\nMaior salario: " + maiorSalario + 
 "\nPorcentagem de mulheres com salario maior que R$ 1000: " + qtde/3*100)