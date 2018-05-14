// Your code here.
function min(a, b)
{
    let output = a;
    if (a < b)
    {
        output = a;
    }
    else
    {
        output = b;
    }
    return output;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
