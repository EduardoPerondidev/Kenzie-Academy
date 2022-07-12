const carros = [
    {
    modelo:"Ka",
    marca:"Ford",
    ano:"2000",
    cor:"Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 'R$ 6.799,33'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 'R$ 12.199,13'
    },
    {
    modelo:"Palio",
    marca:"Fiat",
    ano:"1995",
    cor:"Verde",
    completo: false,
    acessorios: [],
    preco: 'R$ 11.099,11'
    },
    {
    modelo:"Monza",
    marca:"Chevrolet",
    ano:"1993",
    cor:"Vinho",
    completo: false,
    acessorios: [],
    preco: 'R$ 14.578,25'
    },
    {
    modelo:"Saveiro",
    marca:"VW",
    ano:"2013",
    cor:"Prata",
    completo: false,
    acessorios: [],
    preco: 'R$ 28.399,13'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 14.350,45'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"2013",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 22.109,21'
    },
    {
    modelo:"Montana",
    marca:"Chevrolet",
    ano:"2011",
    cor:"Azul",
    completo: false,
    acessorios: [],
    preco: 'R$ 15.999,13'
    },
    {
    modelo:"Stilo",
    marca:"Fiat",
    ano:"2000",
    cor:"Preto",
    completo: false,
    acessorios: [],
    preco: 'R$ 17.251,36'
    }
  ]

function contaEstoque(estoque){
    let contador = 0;
    estoque.forEach(item => contador++)
    return contador;
}
console.log(contaEstoque(carros));

function precoTotal(estoque){
    let valor = 0;
    estoque.forEach(elemento =>{
        let arr = elemento.preco.split('');
        arr.splice(0,3)
        arr = arr.join('')
        arr = arr.replace('.', '').replace(',', '.')
        arr = parseFloat(arr);
        valor += arr;
    })
    return `R$ ${valor.toFixed(2)}`;
}
console.log(precoTotal(carros))

function filtraPorAcessorio(estoque, acessorio){
    let array = []
    estoque.forEach(elemento =>{
        let resultado = elemento.acessorios.includes(acessorio)
        return resultado == true ? array.push(elemento) : null
    })
    return array;
}
console.log(filtraPorAcessorio(carros, 'Trava'))

function filtraPorCompleto(estoque){
    let array = []
    estoque.forEach(elemento =>{
        return elemento.completo == true ? array.push(elemento) : null
    })
    return array;
}
console.log(filtraPorCompleto(carros))

let novoCarro = {
    modelo:"TESTE",
    marca:"Ford",
    ano:"9999",
    cor:"Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 'R$ 6.799,33'
    };
function adicionaCarro(estoque, carro){
    estoque.push(carro);
    return estoque
}
// console.log(adicionaCarro(carros, novoCarro))

function removeCarro(estoque, posicao){
    if(posicao > 0 && posicao < estoque.length){
        posicao = posicao - 1;
        estoque.splice(posicao, 1)
        return estoque
    }
    else{
        return 'valor de posição inválida'
    }
}
console.log(removeCarro(carros, 1))

function contaCarrosNovos(estoque){
    let contador = 0;
    estoque.forEach(elemento =>{
        let idade = 2022 - parseInt(elemento.ano)
        return idade < 10 ? contador++ : null; 
    })
    return contador;
}
console.log(contaCarrosNovos(carros))

function contaCarrosVelhos(estoque){
    let contador = 0;
    estoque.forEach(elemento =>{
        let idade = 2022 - parseInt(elemento.ano)
        return idade > 10 ? contador++ : null; 
    })
    return contador;
}
console.log(contaCarrosVelhos(carros))

function insereDono(estoque, posicao, pessoa){
    if(posicao > 0 && posicao < estoque.length){
        posicao = posicao - 1;
        estoque[posicao].dono = pessoa;
        return estoque;
    }
    else{
        return 'valor de posição inválida'
    }
}
console.log(insereDono(carros, 1,{nome: 'Jhon Dhoe', cpf: '122-133-144-55'}))