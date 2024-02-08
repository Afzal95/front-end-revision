//Move all Zeros to the end of the array
// exp- Example 1:
// Input: [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]
// Output: [1 ,2 ,3 ,4 ,1 ,0 ,0 ,0]

// Brute force-

function moveZeros(arr){
    let temp =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            temp.push(arr[i])
        }
    }
    for(let i=0;i<temp.length;i++){
        arr[i]=temp[i];
    }
    for(let i=temp.length;i<arr.length;i++){
        arr[i]=0;
    }
    return arr;
}
console.log(moveZeros([1 ,0 ,2 ,3 ,0 ,4 ,0 ,1])) // [1,2,3,4,1,0,0,0]
// Space complexity - O(N) - since extra array space is used
// Time complexity - O(N) + O(X) + O(N-X) => O(N)

// OPTIMAL APPROACH

function moveZerosOpt(arr){
    let j=-1;
    for(let ind=0;ind<arr.length;ind++){
        if(arr[ind]==0){
            i=ind;
            break;
        }
    }
    if(j==-1) return arr;
    for(let a=i+1;a<arr.length;a++){
        if(arr[a]!=0){
            [arr[i],arr[a]] = [arr[a],arr[i]];
            i++;
        }
    }
    return arr;
}

console.log(moveZerosOpt([1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]));

//Space com- O(1)
//Time com- O(N) + O(N) => O(N) 