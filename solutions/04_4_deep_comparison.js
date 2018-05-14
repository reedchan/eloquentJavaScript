// Your code here.
function deepEqual(a, b)
{
    if (a === b)
    {
        return true;
    }
    else if ((a === null) || (typeof a != "object")
             || (b === null) || (typeof b != "object"))
    {
        return false;
    }
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
    // Guarantee that the Objects have the same number of keys
    if (keysA.length != keysB.length)
    {
        return false;
    }
    for (let key of keysA)
    {
        if ((!keysB.includes(key))              // b has the same key
            || (!deepEqual(a[key], b[key])))    // Equivalent properties
        {
            return false;
        }
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
