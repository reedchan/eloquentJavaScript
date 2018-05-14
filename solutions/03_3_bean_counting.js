// Your code here.
function countBs(inputString)
{
    return countChar(inputString, "B");
}

function countChar(inputString, searchChar)
{
    let count = 0;
    for (let index = 0; index < inputString.length; index++)
    {
        if (inputString[index] == searchChar)
        {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
