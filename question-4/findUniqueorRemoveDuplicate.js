function findUniqueOrRemoveDuplicates(arr) {

    // Method - 1

    let uniqueArr = [];
    for (let element of arr) {
        uniqueArr.includes(element) ? '' : uniqueArr.push(element);
    }
    console.log(uniqueArr);

    // Method - 2
    // Not Implemented By me Need To remember this.

    console.log([...new Set(arr)]);
}

findUniqueOrRemoveDuplicates(["3", "4", "5", "3", "4", "5", "1", "2", 1, 2, true, false, false, true]);