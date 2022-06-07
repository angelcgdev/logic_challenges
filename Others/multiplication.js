// crear funcion para multiplicar numeros sin usar el simboo de multiplicar


const multiply = (a, b) =>{
    let result = 0;
    const isPositive = Math.abs(b)=== b;
    for(i = 0; i < Math.abs(b); i++ ) {
        result = isPositive ? result + a : result - a;
    }

    return result;
}

const a = multiply(50, 50)

console.log(a)