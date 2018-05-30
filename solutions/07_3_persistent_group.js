class PGroup
{
    // Your code here
    constructor(members)
    {
        this.members = members;
    }

    add(element)
    {
        // Check if the PGroup already has the element
        if (this.has(element))
        {
            return this;
        }
        else
        {
            // Concatenate the element to the Array of members and create a
            // new PGroup from the Array since Array.prototype.concat()
            // returns a new Array
            return new PGroup(this.members.concat(element));
        }
    
    }

    has(element)
    {
        return (this.members.includes(element));
    }

    delete(element)
    {
        // Check if the PGroup has the element
        if (this.has(element))
        {
            // Filter the element out of the Array of members and create a new
            // PGroup from the Array since Array.prototype.filter() returns a
            // new Array
            let newPGroup = new PGroup(this.members.filter(item => {
                return !(item === element);
            }));
            return newPGroup;
        }
        else
        {
            return this;
        }
    }

}

// Since the constructor isn't supposed to be part of the interface, just
// create the empty instance, PGroup.empty, as a starting value instead
PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
