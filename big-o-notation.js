// Big O Notation 
// computational complexity of algorithms (space and time)

// >> analyzing compelxity 

// ---------------------------------------------------------------

// exmaple: given an integer array "arr" with length n 

for (let i=0; i < arr.length - 1;i++) {
    console.log(arr[i]);
}

// time complexity: O(n)
// for each iteration we are printing a number which is O(1)
// the loop iterates n times which gives O(1 ⋅ n) = O(n)

for (let i=0; i < 500000 ;i++) {
    console.log(arr[i]);
}

// time complexity: O(n)
// for each iteration we are printing a number which is O(1)
// the loop iterates 500,000 times which gives O(500000) = 0(1)

// technically both are the same time complexity however, the second one runs much slower 

// ---------------------------------------------------------------

