// Your code here.
function arrayToList(inputArray)
{
    let list = {};
    let start = list;
    for (let index = 0; index < inputArray.length; index++)
    {
        list.value = inputArray[index];
        if (index == inputArray.length - 1)
        {
            list.rest = null;
        }
        else
        {
            list.rest = {};
            list = list.rest;
        }
    }
    return start;
}

function listToArray(list)
{
    let output = [];
    while (list != null)
    {
        output.push(list.value);
        list = list.rest;
    }
    return output;
}

function prepend(element, list)
{
    let start = {};
    start.value = element;
    start.rest = list;
    return start;
}

function nth(list, index)
{
    if (index == 0)
    {
        return list.value;
    }
    else if (list.rest == null)
    {
        return undefined;
    }
    else
    {
        return nth(list.rest, index - 1);
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30]), 3));
// → undefined
