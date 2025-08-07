// Reverse Words in a String
// Example 1:
// Input: s=”this is an amazing program”
// Output: “program amazing an is this”

// Example 2:
// Input: s=”This is decent”
// Output: “decent is This”


//Brute force
function reverseWords(sentence) {
    // TC- O(N)
    // SC- O(N)
    console.log("Before reversing words:");
    console.log(sentence);

    sentence += " ";
    let stack = [];
    let word = "";

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            stack.push(word);
            word = "";
        } else {
            word += sentence[i];
        }
    }

    let result = "";
    while (stack.length > 1) {
        result += stack.pop() + " ";
    }
    result += stack.pop(); // Last word without trailing space

    console.log("After reversing words:");
    console.log(result);
}

// Example usage
let s = "TUF is great for interview preparation";
reverseWords(s);


// Optimized approach using in-place reversal
function reverseWords(s) {
    // TC- O(N)
    // SC- O(1)
    let left = 0;
    let right = s.length - 1;

    let temp = "";
    let ans = "";

    while (left <= right) {
        let ch = s[left];

        if (ch !== ' ') {
            temp += ch;
        } else if (ch === ' ') {
            if (ans !== "") {
                ans = temp + " " + ans;
            } else {
                ans = temp;
            }
            temp = "";
        }
        left++;
    }

    // Add the last word (if any)
    if (temp !== "") {
        if (ans !== "") {
            ans = temp + " " + ans;
        } else {
            ans = temp;
        }
    }

    return ans;
}

// Example usage
const sentence = "TUF is great for interview preparation";
console.log("Before reversing words:");
console.log(sentence);
console.log("After reversing words:");
console.log(reverseWords(sentence));
