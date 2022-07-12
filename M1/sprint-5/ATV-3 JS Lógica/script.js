let garden = [
    [0,0,0,'G'],
    [0,0,'G',0],
    [0,'G',0,0],
    ['G',0,0,0]
    ];

function trimTheGrass(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] == 'G'){
                arr[i][j] = 0;
            }
        }
    }
    console.log(arr);
    return 'Tarefa concluida';
}
console.log(trimTheGrass(garden));
