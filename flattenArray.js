const arr = [1,2,[3,4,5],[6,7,8,9],10] 

// function flatten(arr){
//     let flat = [];
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             flat = flat.concat(flatten(arr[i]))
//         }else{
//             flat.push(arr[i])
//         }
//     }
//     return flat;
// }

// console.log(flatten(arr))

let flat = [];
arr.forEach(array=>{
    return flat.push(...array)
})
console.log(flat);