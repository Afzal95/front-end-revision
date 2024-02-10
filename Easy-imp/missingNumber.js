// Example 1:
// Input Format: N = 5, array[] = {1,2,4,5}
// Result: 3
// Explanation: In the given array, number 3 is missing. So, 3 is the answer.

// Example 2:
// Input Format: N = 3, array[] = {1,3}
// Result: 2
// Explanation: In the given array, number 2 is missing. So, 2 is the answer.

function missing(arr){
    let n = arr.length;
    for(let i=1;i<=n;i++){
        if(arr.indexOf(i)==-1){
            return i;
        }
    }
    return -1 // if no missing num
}
console.log(missing([1]));