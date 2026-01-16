function isPalindrome(n) {
    // find number is palindrome or not
    const str = n.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}  

// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(10)); // false
// console.log(isPalindrome(12321)); // true


// function isPalindrome(n){
//     let rev = 0;
//     let org = n;

//     while(n > 0){
//         let temp = n % 10;
//         rev = rev * 10 + temp;
//         n = Math.floor(n / 10);
//     }
    
//     return (rev == org ? true: false);
// }
// console.log(
// isPalindrome(363)
// );

function isPal(n){
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) return false;
    if (n < 10) return true;

    let rev = 0, temp = n;
    while(temp !== 0){
        let ld = temp % 10 ;
        rev = rev * 10 + ld;
        temp = Math.floor(temp/10);
    }
    return rev == n
}

// For very large integers (beyond JS safe integers), use string-based approach
function isPalindromeLarge(num) {
    // Accepts string or BigInt
    const str = num.toString();
    // Optional: check if it's a valid number string (digits only, no leading zeros except for 0)
    if (!/^\d+$/.test(str)) return false; // Only digits, no negatives or decimals
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Example usage
console.log(isPalindromeLarge("12321")); // true
console.log(isPalindromeLarge("123456789012345678901234567890")); // true if palindrome
console.log(isPalindromeLarge("abc")); // false
console.log(isPalindromeLarge("bab")); 

// console.log( isPal(-121) ) 
// console.log( isPal("ab") ) 