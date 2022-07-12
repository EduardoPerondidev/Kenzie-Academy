function sorteio (lista){
    let poltronaSorteada = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(`A poltrona sorteada é a poltrona do ${lista[poltronaSorteada]}`)
}
let poltronas = [null, 'Danrley', 'Patrick', 'Araújo'];
sorteio(poltronas);