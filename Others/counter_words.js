// escribir una funcion que cuente la cantidad de veces que se repite una palabra

const repeated = str => {
    const lowered = str.toLowerCase();
    const splitted = lowered.split(' ');
    const reduced = splitted.reduce(( acc, element ) => {
        if(acc[element]){
            acc[element]++
        }else{
            acc[element] = 1
        }
        return acc
    }, {});

    return Object.entries(reduced).reduce(( acc, element ) => {
        console.log(element[0]) 
        return acc[1] > element[1] ?  acc : element;
    })
}
const result = repeated('this is an explample for test how many times repeat this word')
console.log(result)