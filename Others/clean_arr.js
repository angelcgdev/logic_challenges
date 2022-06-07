// eliminar los undefined 0 y nullos de un array

const clean = (arr)=> arr.reduce((acc, element)=> {
    if(element){
        acc.push(element);
    }
    return acc;
}, []);

const result = clean([undefined, null, 0, 12, 54, 'last', true, false, , 'old'])

console.log(result);