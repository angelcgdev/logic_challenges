// escribir una funcion que aplane arreglos

const arr = [[1, 2], [[3, 4]], [1, []]]

const flatter = (arr)=> arr.reduce((acc, element) => acc.concat(element), [])

const result = flatter(arr);

console.log(result)