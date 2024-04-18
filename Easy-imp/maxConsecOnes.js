// Example 1:

// Input: prices = {1, 1, 0, 1, 1, 1}

// Output: 3

// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

// Input: prices = {1, 0, 1, 1, 0, 1} 

// Output: 2

// Explanation: There are two consecutive 1's in the array. 

function maxOnes(arr){
    let nos = 0;
    let max = 0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==1 && arr[i+1]==1){
            max++;
        }else{
            nos = Math.max(nos,max);
            max=0;
        }
    }
    return Math.max(nos,max)+1;
}
let n = [1,1,2,1,1,1, 0,0,0]

console.log(maxOnes(n));