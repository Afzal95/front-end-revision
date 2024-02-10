// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
//        [1, 3] (for 2nd variant)
// Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

// Example 2:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
// Result: NO (for 1st variant)
// 	[-1, -1] (for 2nd variant)
// Explanation: There exist no such two numbers whose sum is equal to the target.

function twoSum(arr,t){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==t){
                return `Yes, ${[i,j]}`              
            }
        }
    }
    return `No, ${[-1,-1]}`;
}
let arr = [2,6,5,8,11];
let t = 8;
//console.log(twoSum(arr,t)) // TC- O(N^2) , SC- O(1)

// optimal appr-

function twoSumOpt(arr,t){
    let set = new Map(); 
    for(let i=0;i<arr.length;i++){
        if(set.has(t-arr[i])){
            return [set.get(t-arr[i]),i]
        }else{
            set.set(arr[i],i)
        }
    }
    return [-1,-1]
}
//console.log(twoSumOpt(arr,t)); // TC- nlogn (Map take logn in searching), SC- O(n)

// Two pointer app by sorting

function twoSumTwoPointer(arr,t){
    let temp = [...arr];
    arr.sort((a,b)=>a-b);
    let left =0;
    let right =arr.length-1;
    console.log(arr);
    console.log(temp);

    while(left<=right){
        if(arr[left]+arr[right]===t){
            console.log("Yes");
            break;
        }
        else if(arr[left]+arr[right]<t){
            left++;
        }
        else {
            right--;
        }
    }
    return 'No'
}

twoSumTwoPointer(arr,t) // TC- NlogN+O(N) for sorting it takes nlogn, SC- O(1)