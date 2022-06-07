import "stream/consumers";

const input = [1, 1, 2, 0, 9,0 ,9];

function lonelyinteger(a: number[]): number {
    // const matchs = {};
    // for (let entry of a){
    //     const ref = matchs[entry];
    //     if(ref === undefined){
    //         matchs[entry] = 1;            
    //     }else{
    //         matchs[entry] = ref+1;
    //     }
    // }
    // const test = Object.keys(matchs);
    // const result = test.find((key)=>matchs[key]===1);
    // return Number(result);
    
    const matchs = new Map<number, number>([]);
    for (let entry of a){
        const ref = matchs.get(entry);
        if(ref==undefined){
            matchs.set(entry, 1);
        }else{
            matchs.set(entry, ref+1);
        }
    }
    const test = [...matchs.keys()];
    // console.log(test);
    const result = test.find((key)=>matchs.get(key)===1);
    return Number(result);
    
}


const uniqueElement = lonelyinteger(input);
console.log(uniqueElement);
