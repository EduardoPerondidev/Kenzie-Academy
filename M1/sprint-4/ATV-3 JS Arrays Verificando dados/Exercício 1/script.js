function testaPosicao(lista, posicao)
  {
    let teste = lista.indexOf("Vou ser Dev", posicao);
    if(teste > -1){
        console.log(`Parabéns você recebeu um prêmio.`)
    }
  }
  
  let carrinhoDeCompras =
  [
   "Funko Pop Kakashi",
   "Dragon Ball Collection",
   "Vou ser Dev"
  ]
  testaPosicao(carrinhoDeCompras, 0);
  