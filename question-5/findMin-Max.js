function findMinMax(arr) {
    // Method -1
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));

    // Method -2
    let max = arr[0], min = arr[0];
    for (let elem1 of arr) {
        if (min > elem1) {
            min = elem1;
        }

    }
    for (let elem1 of arr) {
        if (max < elem1) {
            max = elem1;
        }
    }
    console.log(min, max)

    // Method -3
    // Not by me Need to remember this

    min = arr.sort((a,b)=>a-b)[0]
    max = arr.sort((a,b)=>a-b)[arr.length-1]
    console.log(min, max);

}

findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
findMinMax(["1", 2, 3, 4, 5, 6, 7, 8, 9, "10"]);