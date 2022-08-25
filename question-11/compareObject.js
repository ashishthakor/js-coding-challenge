function compareObject(obj1, obj2) {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
        return console.log('These are not objects');
    }
    // console.log(obj1, obj2);
    obj1 = JSON.stringify(obj1); // to convert it in string for better comparism
    obj2 = JSON.stringify(obj2); // to convert it in string for better comparism
    // console.log(obj1, obj2);

    const sortedObj1 = obj1.split("").sort().join("");
    const sortedObj2 = obj2.split("").sort().join("");

    // console.log(sortedObj1, sortedObj2);
    sortedObj1 !== sortedObj2 ? console.log("Both Objects are Simmiler") : console.log("Both Objects are not Simmiler");
}
compareObject({ id: 1 }, { id: 2 });