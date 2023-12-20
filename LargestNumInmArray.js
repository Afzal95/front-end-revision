let array = [1,2,3,43,55,21];

function largestNum(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max;
}

console.log(largestNum(array));
TC = O(N)
SC = O(1)