function isAnagram(str1,str2){
    let anagram = false;

    if(str1.length != str2.length){
        return "Two string are not Anagram";
    }

    // Method -1 
    // const arr1 = str1.toLowerCase().split('').sort();
    // const arr2 = str2.toLowerCase().split('').sort();

    // for (let i = 0 ; i < arr1.length ; i++) {
    //     anagram = arr1[i] === arr2[i] ? true : false;
    // }
    // return anagram ? "Strings are Anagram" : "Strings are not anagram";

    // Method -2
    const arr1 = str1.toLowerCase().split('').sort().join('');
    const arr2 = str2.toLowerCase().split('').sort().join('');

    return arr1 === arr2 ? "Strings are Anagram" : "Strings are not anagram";

}
console.log(isAnagram("Ashish","shashi"))
console.log(isAnagram("Ashisha","shashia"))