// Input : s = "5347"

// Output : "5347"

// Explanation : The odd numbers formed by given strings are --> 5, 3, 53, 347, 5347.

// So the largest among all the possible odd numbers for given string is 5347.

// Input : s = "0214638"

// Output : "21463"

// Explanation : The different odd numbers that can be formed by the given string are --> 1, 3, 21, 63, 463, 1463, 21463.

// We cannot include 021463 as the number contains leading zero.

// So largest odd number in given string is 21463.

// largest odd number formed by digits of a string
function largestOddNumber(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (isDigitOdd(i, num)) {
            return num.slice(0, i + 1);
        }
    }
    return "";
}

function isDigitOdd(index, num) {
    return Number(num[index]) % 2 !== 0;
}

// Example usage:
console.log(largestOddNumber("7543206")); // Output: "7543"
