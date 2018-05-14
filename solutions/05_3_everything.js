function every(array, test) {
    // Your code here.
    /*
    // Loop version
    for (let element of array)
    {
        if (!test(element))
        {
            return false;
        }
    }
    return true;
    */
    // array.some version checks if there is some element in the array that
    // fails the test function in order to check if every element in the array
    // passes the test function
    return (!array.some((element) => { return (test(element) === false) }));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
