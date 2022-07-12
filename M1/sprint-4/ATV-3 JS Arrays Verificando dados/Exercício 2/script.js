function qualTipoDeElemento(lista, posicao)
    {
      if(typeof lista[posicao] == "number"){
        console.log(`O elemento dessa posição é do tipo number`);
      }
      else{
        console.log(`O elemento dessa posição não é do tipo number`);
      }
    }
    let tiposDiversos =[1.5,"String",true,10]
  
    qualTipoDeElemento(tiposDiversos, 0);