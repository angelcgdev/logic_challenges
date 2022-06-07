/* La NASA prepara una lista de indicaciones para el movimiento del robot desde la base de carga en el
ejemplo marcada como punto 0.
Sin embargo están preocupados porque en caso de una emergencia el robot pueda regresar a tiempo a la
base de carga y quieren que evaluemos los planes de movimiento en un simulador, y les digamos la
cantidad de instrucciones máximas que deberíamos enviar al robot cuando se encuentre en su punto más
lejano para que pueda retornar a la base.
Calcule cuál es el número máximo de instrucciones que debería enviarse al robot para que en algún punto
del recorrido regrese a la base.
Function Description
Complete la función abajo para completar la tarea requerida, la función tendrá una lista de planes a
ejecutar, evalúe cada uno y retorne una lista con el numero máximo de instrucciones*/


// las instrucciones seran como maximo 10000

// Primero ingresara un entero N definiendo la cantidad de planes que la NASA quiere evaluar, luego
// existirán N líneas con las cadenas de instrucciones

// test 1

// N = 1  cantidad de planes que la NASA quiere evaluar
// RUULLLDDDR   tendremos un valor por cada valor de N
// Salida = 4

const n = 1;
const instructions = [
    'RUULLLDDDR',
    'U',
    'UUU',
    'DDLLLUUUUURRRRRR'
]


const getMaxIntructionToReturn = (instructions: string[]): number[] => {
    const n = instructions.length;
    const instrucciones = [];
    for (let i = 0; i < n; i++) {
        const instruction = instructions[i].split('');
        let ejeX = 0;
        let ejeY = 0;
        let ejeXMax = 0;
        let ejeYMax = 0;
        const land = {};
        instruction.forEach((i)=> {
            if( i === 'L' ){
                ejeX--;
                // console.log( 'LEFT '+ ejeX )
            }
            if( i === 'U' ){    
                ejeY++;            
                // console.log( 'UP ' + ejeY )
            }
            if( i === 'R' ){
                ejeX++;
                // console.log( 'RIGHT '+ ejeX )                
            }
            if( i === 'D' ){  
                ejeY--;                  
                // console.log( 'DOWN ' + ejeY )
            }

            const asbX = Math.abs(ejeX);
            if(asbX>ejeXMax || asbX === 0){
                ejeXMax = asbX
            }
            const asbY = Math.abs(ejeY);
            if(asbY>ejeYMax || asbX === 0){
                ejeYMax = asbY
            }
        })

        // console.log( '===========> ' + ejeXMax + '<===>' + ejeYMax )
        instrucciones.push(ejeXMax + ejeYMax);
    }

    return instrucciones;
}

const resp = getMaxIntructionToReturn(instructions);
console.log(resp)