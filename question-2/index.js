function reverseString(text) {
    if (typeof text != 'string') {
        text = "" + text;
    }
    // Method-1

    // // console.log(text.split(''));
    // // console.log(text.split('').reverse());
    // console.log(text.split('').reverse().join(''));

    // Method-2
    let reverseText = "";
    for (let charecter of text) {
        reverseText = charecter + reverseText;
    }

    console.log(reverseText)

}
reverseString('Hello Ashish');
reverseString(123);