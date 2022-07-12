let datas = ["João", "Matheus", "Julia", "Lucas", "Carlos"]
function analyticsData(str, arr){
    let adicionado = arr;
    let teste = arr.indexOf(str);
    if(teste > 1){
        return `O usuário Carlos existe na lista e está na ${arr.indexOf(str)+1}° posição`;
    }
    else{
        adicionado.push(str);
        return `Como o usuário não foi encontrado, foi inserido dentro da lista, segue a nova estrutura: ${adicionado}`;
    }
}
console.log(analyticsData("Carlos", datas));