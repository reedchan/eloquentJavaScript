// Your code here (and the code from the previous exercise)
// Group class copied from 06_2_groups.js
// Implementation of a Set as an exercise
class Group {
    // Your code here.
    constructor()
    {
        // Create an Array to store the elements
        this.elements = [];
    }

    add(element)
    {
        // Check if the Array already has the element
        if (this.elements.includes(element))
        {
            // Do nothing
            return undefined;
        }
        else
        {
            // Add the element to the Array
            this.elements.push(element);
        }
    }

    has(element)
    {
        // Return if the Array has the element
        return this.elements.includes(element);
    }

    delete(element)
    {
        // Filter out the element
        let temp = this.elements.filter(item => {
            return !(item === element)
        });
        // Set the internal Array to the filtered Array
        this.elements = temp;
    }

    static from(iterableObject)
    {
        // Create a new Group
        let group = new Group();
        for (let element of iterableObject)
        {
            // Add each element of the iterable object to the Group, but let
            // add handle the logic
            group.add(element);
        }
        // Return the new Group
        return group;
    }

    // This function is new to this exercise
    [Symbol.iterator]()
    {
        return new GroupIterator(this);
    }
}

class GroupIterator
{
    constructor(group)
    {
        this.index = 0;
        this.group = group;
    }

    next()
    {
        if (this.index >= this.group.elements.length)
        {
            return { value: undefined, done: true };
        }
        else
        {
            let value = this.group.elements[this.index];
            this.index++;
            return { value, done: false };
        }
    }
}

/*
Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};
*/

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
