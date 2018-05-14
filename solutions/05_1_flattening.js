let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((a,b) => { return a.concat(b); }, []));
// → [1, 2, 3, 4, 5, 6]
