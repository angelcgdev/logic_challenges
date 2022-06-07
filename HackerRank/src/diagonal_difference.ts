
const input = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]];


function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let diagonalSum1 = 0;
    let diagonalSum2 = 0;
    for(let index in arr){
        const n = arr[index][index];
        const m = arr[index].reverse()[index];
        diagonalSum1 = diagonalSum1+n;
        diagonalSum2 = diagonalSum2+m;
    }
    const diagonalDiference = diagonalSum1 - diagonalSum2;
    return Math.abs(diagonalDiference);

}

const diference = diagonalDifference(input);
console.log(diference);