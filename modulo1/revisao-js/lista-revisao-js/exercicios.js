// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayInvertido = array.reverse()
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
   
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const novoArray = array.filter((numero) => {
        return numero % 2 === 0
    })
    return novoArray
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novoArray = array.filter((numero) => {
        return numero % 2 === 0}).map((numero) => {
            return numero * numero
        })
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = - Infinity
    let i
    for(i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior
    let menor
    let divisivel
    if(num1 > num2){
        maior = num1
        menor = num2
    }else{
        maior = num2
        menor = num1
    }
    if(maior % menor === 0){
        divisivel = true
    }else{
        divisivel = false
    }
    const objeto = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: divisivel,
        diferenca: maior - menor
    }
    return objeto
  
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    
    const nPares = []
    for(let i = 0; nPares.length < n; i++){
        if(i % 2=== 0){
            nPares.push(i)
        }
    }
   return nPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if((ladoA === ladoB) && (ladoA === ladoC)){
        return "Equilátero"
    }else if((ladoA !== ladoB) && (ladoA !== ladoC) && (ladoB !== ladoC)){
        return "Escaleno"
    }else{
        return "Isósceles"
    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = array.sort((a, b) => a - b)
    const novoArray = []
    novoArray.push(arrayOrdenado[arrayOrdenado.length -2], arrayOrdenado[1])
    return novoArray
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}