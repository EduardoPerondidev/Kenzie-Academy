let produto = "maçã";
let quantidadeDoProduto = 2;
let quantidadeDoProdutoParaPromoção = 5 - quantidadeDoProduto;

if(produto == "maçã" && quantidadeDoProduto >= 5){
    console.log(`Você recebeu uma promoção, o valor do produto será R$5.00`);
}
else{
    console.log(`Se você adicionar mais ${quantidadeDoProdutoParaPromoção} maçãs, o valor sairá por R$5.00`);
}
alert(`Abra o console`);