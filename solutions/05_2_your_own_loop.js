// Your code here.
function loop(value, test, update, body)
{
    for (let temp = value; test(temp); temp = update(temp))
    {
        body(temp);
    }
}

// test function takes in n and returns (n > 0)
// update function takes in n and returns (n - 1)
// body function is console.log
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
