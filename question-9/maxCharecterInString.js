function maxCharecterInString(str){
    str = str.toLowerCase().split(' ').join('').split('').sort().join('');
    console.log(str);
    let obj = {};
    let maxChar = '';
    let max = 0;
    for(let charecter of str){
        obj[charecter] ? obj[charecter]++ : obj[charecter] = 1;
        // console.log(charecter, obj[charecter]);
        obj[charecter] > max ? (maxChar = charecter, max = obj[charecter]) : null;
    }
    // console.log(obj, maxChar, max);
    return maxChar;
    // or we can also " return { charecter : maxChar, count: max } " or " return { maxChar : max } "
}
console.log("Max Charecter in String : ",maxCharecterInString("This is a string and now we have to find out maximum occured charecter in string"))
console.log("Max Charecter in String : ",maxCharecterInString("aaa bBb C"))