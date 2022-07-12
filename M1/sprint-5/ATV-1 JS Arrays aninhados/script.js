let carlos  = ['papel', 'desodorante', 'sabão', 'pasta dental', 'esponja'];
let danrley = ['carne', 'frutas', 'temperos', 'cerveja', 'refrigerante',];
let robert  = ['protetor solar', 'esparadrapo', 'alcool', 'morfina', 'adrenalina'];
let andre   = ['revolver', 'acompanhante', 'charuto', 'console', 'baralho'];

function caixa(arr1, arr2,arr3,arr4){
    let caixa = [];
    if(arr1.length == 5 && arr2.length == 5 && arr3.length == 5 && arr4.length == 5){
      caixa.push(arr1,arr2,arr3,arr4);
      return caixa;
    }
    else{
        return 'Quantidade errada de itens';
    }
}
console.log(caixa(carlos,danrley, robert, andre));