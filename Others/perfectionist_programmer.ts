/*Ricardo es miembro de nuestro equipo, y aunque suele ser muy productivo, sufre de un impulso que le
lleva a perfeccionar y reescribir una parte del trabajo que hace cada día.
Cada día es capaz de escribir F cantidad de funciones nuevas, pero su impulso lo lleva el mismo día a
borrar R cantidad de las funciones, y así cada día, increíblemente cuando termina su trabajo no vuelve a
refactorizar ninguna función, sino que envía el pull request a review.
Todos aman el trabajo de Ricardo, pero el arquitecto del equipo está preocupado por el deadline(fecha de
entrega) de las historias que le asigna a Ricardo, y te pide ayuda con un programa que determine si
Ricardo podrá cumplir con su asignación.
Para ello el arquitecto te entregará un numero D correspondiente al número de días del deadline de
entrega, T la cantidad de funciones totales que espera el cliente que realice Ricardo, F la cantidad de
funciones nuevas que escribirá Ricardo por día, R la cantidad de funciones que borrará Ricardo cada día
al finalizar su trabajo.*/


// Calcule si Ricardo puede o no cumplir con las tareas asignadas.


// input
// D = dias que faltan para el deadline
// T = cantidad de funciones que se espera que realice ricardo
// F = cantidad de funciones nuevas
// R = cantidad de funciones borradas

const input = [
    [2, 40, 20, 5],
    [5, 110, 30, 10]

]

function podraCumplir (casos: number[][]): boolean[] {

    return casos.map((caso)=> {
        const d = caso[0];
        const t = caso[1];
        const f = caso[2];
        const r = caso[3];
    
        // 
        let cantFunctions = 0;
        for (let i = 0; i < d; i++){
            if(i!==d-1){
                cantFunctions =  cantFunctions + (f - r);
            }else{
                cantFunctions =  cantFunctions + f;
            }
        }
        if(cantFunctions === t || cantFunctions > t){
            return true;
        }
        return false;
    });
}

const result = podraCumplir(input);
function respToString (resp : boolean[]): string [] {

    return resp.map((value)=>{
        if(value)
        return 'Lo logrará'
        return 'No lo logrará'
    })
}
console.log(respToString(result));