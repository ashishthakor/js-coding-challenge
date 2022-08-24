function fizzBuzz() {
    // From 1 to 100
    // fizz for multiply by 3
    // buzz for multiply by 5
    // fizzbuzz for multiply by 3 & 5

    // Method-1

    // for (let i = 1; i < 100; i++) {
    //     if (i % 3 === 0 && i % 5 === 0) {
    //         console.log("FizzBuzz");
    //     }
    //     else if (i % 3 === 0) {
    //         console.log("Fizz");
    //     }
    //     else if (i % 5 === 0) {
    //         console.log("Buzz");
    //     }
    //     else {
    //         console.log(i);
    //     }
    // }

    // Method-2

    for (let i = 1; i < 100; i++) {
        (i % 3 === 0 && i % 5 === 0) ?
            console.log("FizzBuzz") : (i % 3 === 0) ?
                console.log("Fizz") : (i % 5 === 0) ?
                    console.log("Buzz") :
                    console.log(i);
    }
}
fizzBuzz();