//https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/

let arr = [5, 4, 9, 8, 1, 98, 54, 36];

function MinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  // Find min and max
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  let sec_max = Number.NEGATIVE_INFINITY;
  let sec_min = Number.POSITIVE_INFINITY;

  // Find second max and min
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > sec_max && arr[i] < max) sec_max = arr[i];
    if (arr[i] < sec_min && arr[i] > min) sec_min = arr[i];
  }

  return [sec_max, sec_min].join(" ");
}

console.log(MinMax(arr));