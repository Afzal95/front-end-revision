// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right 5,4,3,2,1,7,6 // 6,7,5,4,3,2,1
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .

// Example 2:
// Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.

// Brute force approach
// function rotate(arr,k){
//     let ans = [];
//     for(let i=arr.length-k;i<arr.length;i++){
//         ans.push(arr[i]);
//     }
//     for(let i=0;i<arr.length-k;i++){
//         ans.push(arr[i])
//     }
//     return ans;
// }
//let n = [1,2,3,4,5,6]; k=3; // space comp- O(n), Time comp- O(K)+O(N-K)
//console.log(rotate(n,k));

// optimal approach-

// function rotateOpt(arr,k){
//     // first reverse last k elem-
//     reverse(arr,arr.length-k,arr.length-1)
//     // reverse first arr.length-k elem
//     reverse(arr,0,arr.length-k-1)
//     // reverse the arr
//     reverse(arr,0,arr.length-1)
//     return arr;
// }
// Bangalore

// function reverse(arr,smaller,greater){
//     while(smaller<=greater){
//         const temp = arr[smaller];
//         arr[smaller] = arr[greater];
//         arr[greater] = temp;
//         smaller++;
//         greater--;
//     }
// }
//console.log(rotateOpt(n,k));

// let arr = [1,2,3];
// let temp = [];
// let len = arr.length;
// let d = 2;
// for(let i=len-d;i<len;i++){
//     temp.push(arr[i])
// }

// for(let i=d+1;i<len;i++){
//     arr[i]=arr[i-d]
//     break;
//     console.log(arr[i],i-d);
// }
//console.log("arr-",arr);

let arr = [1,2,3,4,5,6], k =2; //right
//output - [5,6,1,2,3,4]
function rev(arr,k){
    // reverse last k elem
    reverse(arr,arr.length-k,arr.length-1)
    // reverse first len-k elem
    reverse(arr,0,arr.length-k-1);
    // reverse all array
    reverse(arr,0,arr.length-1)
    console.log(arr);
}

function reverse(arr,start,end){
    while(start<=end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

rev(arr,k);