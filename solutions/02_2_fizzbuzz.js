let count = 1;
for (; count <= 100; count++)
{
    /*
    if ((count % 3) == 0)
    {
        if ((count % 5) == 0)
        {
            console.log("FizzBuzz");
        }
        else
        {
            console.log("Fizz");
        }
    }
    else if ((count % 5) == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(count);
    }
    */
    let output = "";
    if ((count % 3) == 0)
    {
        output += "Fizz";
    }
    if ((count % 5) == 0)
    {
        output += "Buzz";
    }
    // If output evaluates to false, print count instead
    console.log(output || count);
}
