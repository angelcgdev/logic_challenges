// obtener el mayor numero de un arreglo pero iterando el arreglo solo una vez

const getBiggest = (arr)=> arr.reduce((acc, el) => acc > el ? acc : el);

const b = getBiggest([950, -1212, 34, 43, 79, 780])

console.log(b)

