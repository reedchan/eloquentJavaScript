require("../scripts.js");
const ch05 = require("../chapter/05_higher_order.js");

function dominantDirection(text) {
    // Your code here.
    // Count the characters by direction, using characterScript to
    // assign them a direction, and falling back to the string
    // "none" for characters that aren't part of any script
    let scripts = ch05.countBy(text, char => {
        let script = ch05.characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    });
    // Filter out the scripts that don't belong to anything
    // filter takes in a test function to determine what to keep
    scripts = scripts.filter(({name}) => { return (name != "none") });
    // scripts should now be an array of objects with a direction and a count

    // Default to ltr
    if (scripts.length == 0)
    {
        return "ltr";
    }
    else
    {
        // Compare counts to end up with one dominant object
        // Return the object's name
        return scripts.reduce((a, b) => {
            return (a.count >= b.count) ? a : b;
        }).name;
    }
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
