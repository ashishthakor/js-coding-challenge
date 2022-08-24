function findVowels(text) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    // Method-1

    // for (let i = 0; i < text.length; i++) {
    //     if (vowels.includes(text[i].toLowerCase())) {
    //         console.log(text[i]);
    //         vowelCount++;
    //     }
    // }

    // Method-2

    // for (let charecter in text) {
    //     if (vowels.includes(text[charecter].toLowerCase())) {
    //         console.log(text[charecter]);
    //         vowelCount++;
    //     }
    // }

    // Method-3

    for (let charecter of text) {
        if (vowels.includes(charecter.toLowerCase())) {
            console.log(charecter);
            vowelCount++;
        }
    }
    console.log("vowelCount in Sentence :- ", vowelCount);
}
findVowels("Hello Ashish");
findVowels("aeiou AEIOU");
findVowels("wqrtyp123");
