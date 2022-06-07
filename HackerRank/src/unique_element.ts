
function lonelyinteger(a: number[]): number {
    // Write your code here
    const matchs = new Map<number, number>();
    
    for (let entry of a){
        if(a[entry] == undefined){
            a[entry] = 1;            
        }else{
            a[entry] = a[entry]+1;
        }
    }
    let val;
    matchs.forEach(v => {
        if(v==1){
            val =  v;
        }
    });
    return val;
    
}
