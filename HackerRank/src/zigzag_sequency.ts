import "stream/consumers";

const input = [2,3,5,1,4];
const n = input.length;

function findZigZagSequence(a: number[], n: number): number[]{
    const mid = (n + 1)/2;
    const temp = a[mid];
    console.log(temp);
    return [];
}
const rest = findZigZagSequence(input, n);
console.log(rest);