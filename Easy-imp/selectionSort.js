// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

// Example 2:
// Input: N=5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting the array is: 1, 2, 3, 4, 5

let arr = [13,46,24,52,20,9];

function selection(arr){
    for(let i=0; i<arr.length-1;i++){
        let min =i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }            
        }
        // swap
        let temp = arr[min];
        arr[min]=arr[i];
        arr[i]=temp;
    }
    console.log(arr); // O(N^2)
}

selection(arr);
// function selectionSort(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let mini = i;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[mini]) {
//                 mini = j;
//             }
//         }
//         // Swap
//         let temp = arr[mini];
//         arr[mini] = arr[i];
//         arr[i] = temp;
//     }

//     console.log("After selection sort:");
//     console.log(arr.join(" "));
// }

// Example usage
//selectionSort(arr);
