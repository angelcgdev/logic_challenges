// teniendo un arrar que representa el costo de las acciones con el paso del tiempo encontrar la ganancia mayor dependiendo de cuando compro y vendo la accion

let acciones =  [4,3,2,5,10];

function ganancia ( acciones ) {
    let macGan = acciones[1] - acciones[0];
    // let maxGan = 0;
    for ( let c = 0; c < acciones.length; c++){
        for( let v = c+1; v < acciones.length; v++){
            const valC = acciones[c];
            const valV = acciones[v];
            const gan = valV-valC;
            if(gan>maxGan){
                maxGan = gan;
            }
        }
    }
    return maxGan;
}

console.log(ganancia(acciones));