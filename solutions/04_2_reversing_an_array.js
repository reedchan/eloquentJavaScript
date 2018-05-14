// Your code here.
function reverseArray(inputArray)
{
    let output = [];
    /*
    for (let element of inputArray)
    {
        // Prepend to the array
        // Kind of like pushing onto a stack
        output.unshift(element);
    }
    */
    // Loop over the array backwards and append the elements to the array
    for (let index = inputArray.length - 1; index >= 0; index--)
    {
        output.push(inputArray[index]);
    }
    return output;
}

function reverseArrayInPlace(inputArray)
{
    // Swap values at inputArray[lower] and inputArray[upper], but stop
    // when the upper and lower indices have converged
    let lower = 0;
    let upper = inputArray.length - 1;
    while (lower < upper)
    {
        temp = inputArray[lower];
        inputArray[lower] = inputArray[upper];
        inputArray[upper] = temp;
        // Update the indices to move towards the middle of the array
        lower++;
        upper--;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
