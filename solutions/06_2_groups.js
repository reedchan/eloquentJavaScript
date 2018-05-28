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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

