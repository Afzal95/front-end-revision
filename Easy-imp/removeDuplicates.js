// Example 1: 

// Input: arr[1,1,2,2,2,3,3]

// Output: arr[1,2,3,_,_,_,_]

// Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.

// Example 2: 

// Input: arr[1,1,1,2,2,3,3,3,3,4,4]

// Output: arr[1,2,3,4,_,_,_,_,_,_,_]

// Explanation: Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array.
// Brute force//
function duplicate(arr){
    let set = new Set(arr);
    let uniquesArr = Array.from(set);
    for(let i=0;i<arr.length;i++){
        arr[i] = uniquesArr[i]
    }
    return uniquesArr.length
}
//console.log(duplicate([1,1,1,2,2,3,3,3,3,4,4]));

// Optimal sol

function duplicateOpt(arr){
    let j=0;
    for(let i=1;i<arr.length;i++){
        if(arr[j]!==arr[i]){
            j++;
            arr[j]=arr[i]
        }
    }
    return j+1;
}
//console.log(duplicateOpt([1,1,1,2,2,3,3,3,3,4,4]));

// TC- O(N) since we are looping through once
// Sp Comp- O(1) No extra space of n length;
// let arr = [1,2,3,4]
// let set = new Set(arr);
// let obj = {name:"afzal",age:'28'}
// set.add(5);
// set.add(obj);
// console.log(set.size);

let arr = [1,1,2,3,4,5,5,8,9];
// function remove(arr){
//     let i=0;
//     for(let j=1;j<arr.length;j++){
//         if(arr[i]!==arr[j]){
//             i++;
//             arr[i]=arr[j]
//         }
//     }
//     console.log(arr,i+1);
// }
// remove(arr)

function sum(n){
    let acc = n;
    return function adder(next){
        if(next==undefined){
            return acc;
        }
        acc+=next;
        return adder;
    }
}

console.log(sum(100)());