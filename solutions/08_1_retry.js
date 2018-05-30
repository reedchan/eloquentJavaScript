class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b)
{
    if (Math.random() < 0.2)
    {
        return a * b;
    }
    else
    {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b)
{
    // Your code here.
    let product = undefined;
    while (true)
    {
        try
        {
            product = primitiveMultiply(a, b);
            break;
        }
        catch (e)
        {
            // Ignore MultiplicatorUnitFailure errors
            if ((e instanceof MultiplicatorUnitFailure) == false)
            {
                throw e;
            }
        }
    }
    return product;
}

console.log(reliableMultiply(8, 8));
// → 64
