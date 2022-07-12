function notaAlunos (nota1, nota2, nota3, nota4){
    if(typeof nota1 === "number" && typeof nota2 === "number" && typeof nota3 === "number" && typeof nota4 === "number"){
        let notaTotal = nota1 + nota2 + nota3 + nota4;
        return notaTotal;
    }
    else{
        return `O campo só pode receber números.`;
    }
}

console.log(notaAlunos(8, '6', 9, 3));