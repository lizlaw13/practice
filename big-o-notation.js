// Big O Notation 
// computational complexity of algorithms (space and time)

// >> analyzing compelxity 


// ---------------------------------------------------------------


for (let i=0; i < arr.length;i++) {
    console.log(arr[i]);
}

// time complexity: O(n)
// for each iteration we are printing a number which is O(1)
// the loop iterates n times which gives O(1 ⋅ n) = O(n)


for (let i=0; i < arr.length;i++) {
    for (let i=0; i < 500000 ;i++) {
        console.log(arr[i]);
    }
}

// time complexity: O(n)
// each inner iteration we are printing a number which is O(1)
// this loop iterates 500,000 times which gives O(500000) = 0(1)
// each outter loop is O(500000) = O(n)

// technically both are the same time complexity however, the second one runs much slower 


// ---------------------------------------------------------------


for (let i=0; i < arr.length;i++) {
    for (let i=0; i < arr.length;i++) {
        console.log(arr[i] * arr[i]);
    }
}

// time complexity: O(n^2)
// each inner iteration we are printing a number and multiplying which both are O(1) - constant
// each inner iterations runs n times, which means each outter itertion runs n times
// each outter loop iterates n times which gives O(n ⋅ n) = O(n^2)


// ---------------------------------------------------------------


for (let i=0; i < arrOne.length;i++) {
    console.log(arrOne[i]);
}

for (let i=0; i < arrOne.length;i++) {
    console.log(arrOne[i]);
}

for (let i=0; i < arrTwo.length;i++) {
    console.log(arrTwo[i]);
}

// time complexity: O(n + m)
// the first two loops are O(n) while the last loop is O(m) because it is a new array
// this gives O(2n + m) = O(n + m)


for (let i=0; i < arr.length;i++) {
    for (let j=i; j < arr.length;j++) {
        console.log(arr[i] + arr[j]);
    }
}

// arr     [1, 2, 3, 4]
// index   [0, 1, 2, 3]

// i = 0 = item = 1
//      j = 0 = item = 1
//          j = 0 = item = 1

 
// time complexity: O(n^2)
// inner loop is dependant on the outter loop iteration
// the first time the inner loop runs it is n times, the second time is n - 1, etc. 
// total iteration is 1 + 2 + 3 + 4 + ... + n