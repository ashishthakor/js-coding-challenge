function checkPalindrome(text) {
    text = "" + text;
    // Method -1

    // return (text.toLowerCase() === text.toLowerCase().split('').reverse().join('')? true : false);
    
    // method -2 
    // make reverse same as methods in question-2 an check above condition
    let reverseText = "";
    for (let charecter of text) {
        reverseText = charecter + reverseText;
    }
    
    return (text.toLowerCase() === reverseText.toLowerCase() ? true : false);
}
console.log(checkPalindrome("aBbA"));
console.log(checkPalindrome("abcba"));
console.log(checkPalindrome("123xyz"));
console.log(checkPalindrome(123321));