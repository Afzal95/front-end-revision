// // Problem Statement: Given an array, find the second smallest and second largest 
// //element in the array. Print ‘-1’ in the event that either of them doesn’t exist.
// //exp- array = [1, 2, 4, 6, 7, 5];
// //ans - [2,6]

// // brute force-

// function secondNum(arr){
//     let array = arr.sort((a,b)=>a-b);
//     let secL = array[array.length-2];
//     let secS = array[1];
//     console.log(secS,secL);
// }

// secondNum([1, 2, 4, 6, 7, 5]);

// // better approach

// function betterSecNum(arr){
//     let largest = -Infinity;
//     let secLargest = -Infinity;
//     let smallest = Infinity;
//     let secSmallest = Infinity;
//     if(arr.length===0 || arr.length===1){
//         return console.log(-1,-1);
//     }

//     for(let i=0;i<arr.length;i++){
//         largest = Math.max(largest,arr[i])
//         smallest= Math.min(smallest,arr[i]);
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<secSmallest && arr[i]!==smallest ){
//             secSmallest = arr[i]
//         }
//         if(arr[i]>secLargest && arr[i]!==largest){
//             secLargest = arr[i]
//         }
//     }
//     console.log(secSmallest,secLargest);
//     return;
// }

// betterSecNum([10, 22, 14, 96, 17, 5])

// // optimal sol-

// function secondSmallest(arr) {
//     if (arr.length < 2)
//       return -1;
  
//     let small = Infinity;
//     let second_small = Infinity;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < small) {
//         second_small = small;
//         small = arr[i];
//       } else if (arr[i] < second_small && arr[i] !== small) {
//         second_small = arr[i];
//       }
//     }
  
//     return second_small;
//   }
  
//   function secondLargest(arr) {
//     if (arr.length < 2)
//       return -1;
  
//     let large = -Infinity;
//     let second_large = -Infinity;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > large) {
//         second_large = large;
//         large = arr[i];
//       } else if (arr[i] > second_large && arr[i] !== large) {
//         second_large = arr[i];
//       }
//     }
  
//     return second_large;
//   }
  
//   const arr = [1, 2, 4, 7, 7, 5];
//   const sS = secondSmallest(arr);
//   const sL = secondLargest(arr);
  
//   console.log("Second smallest is " + sS);
//   console.log("Second largest is " + sL);
  
  
// Example 1:
// Input: [1,2,4,7,7,5]
// Output: Second Smallest : 2
// 	Second Largest : 5
// Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

// Example 2:
// Input: [1]
// Output: Second Smallest : -1
// 	Second Largest : -1
// Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.

let smallest = Infinity;
let secondSmallest = Infinity;
let largest = -Infinity;
let secondLargest = -Infinity;
let array = [1,2,4,7,7,5]

function secLargest(arr){
for(let x =0; x<arr.length; x++){
  if(arr[x]>largest)
}
}