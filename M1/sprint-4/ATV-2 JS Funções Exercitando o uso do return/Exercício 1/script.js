function soma (nota1, nota2 ,nota3, nota4){
    return nota1 + nota2 + nota3 + nota4;
}
function media(total){
    return total / 4;
}
function resultado(nota1, nota2, nota3, nota4){
    return media(soma(nota1, nota2, nota3, nota4));
}

console.log(`Média do Carlos: ${resultado(5,6,8,9)}`)
