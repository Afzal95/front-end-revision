// Example 1:
// Input Format: N = 3, M = 4, target = 8,
// mat[] = 
// 1 2 3 4
// 5 6 7 8 
// 9 10 11 12
// Result: true
// Explanation: The ‘target’  = 8 exists in the 'mat' at index (1, 3).

// Example 2:
// Input Format: N = 3, M = 3, target = 78,
// mat[] = 
// 1 2 4
// 6 7 8 
// 9 10 34
// Result: false
// Explanation: The ‘target' = 78 does not exist in the 'mat'. Therefore in the output, we see 'false'.
// Brute force app-
function matrix(arr,t){
    let n = arr.length;
    let m = arr[0].length;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j]==t){
                return console.log("Yes");
            }
        }
    }
    return console.log("No");
}

//matrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],23);

// Better app- using binary search-

function matrixBin(mat,t){
    let n = mat.length;
    let m = mat[0].length;
    for(let i=0;i<n;i++){
        if(mat[i][0]<=t && t<=mat[i][m-1]){
            return binarySearch(mat[i],t)
        }
    }
    return false
}

function binarySearch(nums,t){
    let low=0,high=nums.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid]==t){
            return true
        }
        if(nums[mid]>t){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return false
}

console.log(matrixBin([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],111));
// TC-O(n+logm) // since binary search is happening for one row only not for every row
// SC- O(1)