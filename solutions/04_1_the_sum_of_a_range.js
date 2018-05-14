// Your code here.
function range(start, end, step=0)
{
    let output = [];
    if (start > end)
    {
        // if step would cause an infinite loop,
        // set step to -1
        if (step >= 0)
        {
            //console.log("Invalid step: ", step);
            //console.log("Setting step to -1");
            step = -1;
        }
        for (let count = start; count >= end; count+=step)
        {
            output.push(count);
        }
    }
    else
    {
        // if step would cause an infinite loop,
        // set step to 1
        if (step <= 0)
        {
            //console.log("Invalid step: ", step);
            //console.log("Setting step to 1");
            step = 1;
        }
        for (let count = start; count <= end; count+=step)
        {
            output.push(count);
        }
    }
    return output;
}

function sum(inputArray)
{
    let output = 0;
    for (let element of inputArray)
    {
        output += element;
    }
    return output;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
