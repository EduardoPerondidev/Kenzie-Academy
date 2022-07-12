let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}
let supostoGanhador = {
    nome: 'Adamastor',
    cpf: '123.321.789-92'
}
let listaperdedores = []
function verificaVencedor(vencedor, supostoVencedor){
    let nome = supostoVencedor.nome.charAt(0).toUpperCase() + supostoVencedor.nome.toLowerCase().slice(1);
    if(vencedor.nome == nome && vencedor.cpf == supostoGanhador.cpf){
        return 'É ganhador!'
    }
    else{
        let arr = [guardaperdedor(supostoVencedor), 'É alarme falso!']
        return arr
    }
}
console.log(verificaVencedor(ganhador,supostoGanhador))

function guardaperdedor(perdedor){
    listaperdedores.push(perdedor)
    let arr = [listaperdedores.length > 1 ?`${listaperdedores.length} Pessoas tentaram retirar o prêmio` :`${listaperdedores.length} Pessoa tentou retirar o prêmio`, listaperdedores]
    return arr;
}