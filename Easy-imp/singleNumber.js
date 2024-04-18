// Find the number that appears once, and the other numbers twice
// Example 1:
// Input Format: nums[] = {2,2,1}
// Result: 1
// Explanation: In this nums, only the element 1 appear once and so it is the answer.

// Example 2:
// Input Format: nums[] = {4,1,2,1,2}
// Result: 4
// Explanation: In this nums, only element 4 appear once and the other elements appear twice. So, 4 is the answer.
// Brute force code
function single(nums){
    let twice = {};
    for(let i=0;i<nums.length;i++){
        if(twice[nums[i]]){
            twice[nums[i]]++;            
        }else{
            twice[nums[i]]=1
        }
    }
    console.log(twice);
    let numsObj = Object.keys(twice);
    for(let i of numsObj){
        if(twice[i.toString()]==1){
            return i;
        }
    }
}
// Space- comp- O(N)+O(N), Time comp- O(N)+O(N)
//console.log(single([2,1,3,1,2]))

// Optimal appro-
// XOR ^ appr-
function missingOpt(arr){
    let ans =0;
    for(let i=0;i<arr.length;i++){
        ans = ans ^ arr[i]; // XOR ans=ans ^ arr[i]
    }
    return ans;
}

console.log(missingOpt([2,1,4,1,2])); // TC_ O(N), Space- com- O(1)