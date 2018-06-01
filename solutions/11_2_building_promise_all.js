function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        // Your code here.
        let count = promises.length;
        let results = [];
        if (promises.length == 0)
        {
            resolve(results);
        }
        for (let i = 0; i < promises.length; i++)
        {
            promises[i].then(result => {
                count--;
                results[i] = result;
                if (count == 0)
                {
                    resolve(results);
                }
            }, reject);
        }
    });
    // NOTE: doing something along the lines of
    // promises.map(promise => promise.then(...)) doesn't work
    // likely because it'll just map to an Array of Promises instead of an
    // Array of hopefully resolved Promises
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
    console.log("We should not get here");
}).catch(error => {
    if (error != "X") {
        console.log("Unexpected failure:", error);
    }
});
