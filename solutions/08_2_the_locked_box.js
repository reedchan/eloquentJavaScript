const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body)
{
    // Your code here.
    // Determine if the box is initially locked
    let wasLocked = box.locked;
    try
    {
        if (wasLocked == true)
        {
            box.unlock();
        }
        return body();
    }
    finally
    {
        if (wasLocked == true)
        {
            box.lock();
        }
    }
}

withBoxUnlocked(function()
{
    box.content.push("gold piece");
});

try
{
    withBoxUnlocked(function()
    {
        throw new Error("Pirates on the horizon! Abort!");
    });
}
catch (e)
{
    console.log("Error raised:", e);
}
console.log(box.locked);
// → true
