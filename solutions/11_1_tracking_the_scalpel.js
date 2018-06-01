async function locateScalpel(nest)
{
    // Your code here.
    // This works on the website's chapter page, BUT
    // not in the website's code sandbox...
    /*
    let lines = network(nest).map(async name => {
        return {name: name, scalpel: await anyStorage(nest, name, "scalpel")};
    });
    let loc = await Promise.all(lines).then(value => {
        return value.filter(({name, scalpel}) => name == scalpel);
    });
    if (loc.length != 1)
    {
        return undefined;
    }
    return loc[0].name;
    */

    // Determine the name of the nest to check
    let current = nest.name;
    while (true)
    {
        // Await the value of "scalpel" in the storage of the nest current
        let scalpel = await anyStorage(nest, current, "scalpel");
        if (current == scalpel)
        {
            // Return current if scalpel is stored at current
            return current;
        }
        // Otherwise, set current to scalpel
        current = scalpel;
    }
}

function locateScalpel2(nest)
{
    function loop(current)
    {
        // Wait for the Promise of the value of "scalpel" in current to resolve
        // then check if value of the Promise matches current
        return anyStorage(nest.name, current, "scalpel").then(next => {
            if (next == current)
            {
                return next;
            }
            else
            {
                return loop(next);
            }
    });
    // Start by checking at nest.name
    return loop(nest.name);
}

locateScalpel(bigOak).then(console.log);
// → Butcher Shop
