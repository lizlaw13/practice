// REVERSE STRING 
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(s) {
    // use two pointers method 
    // start one pointer at the beginning and one at the end 
    // take each pointer and swap the letters
    // once they are swaped move pointer closer to the center 
    // stop the loop when pointers meet 
    
    let i = 0; 
    let j = s.length - 1;
    while (i < j) {
        let copy = s[i]; 
        s[i] = s[j];
        s[j] = copy;
        i++;
        j--;
    }
    
    return s;
}

// SORTED SQUARES
// Given an integer array nums sorted in non-decreasing order, return an array 
// of the squares of each number sorted in non-decreasing order.

function sortedSquares(nums) {
    // use two pointers method
    // start a pointer at the begining and one at the end
    // the left is always going to be smaller than the right
    // square the numbers and compare the two 
    // add the largest number to the new array (at the begining of it)
    // move the pointers to the center after each iteration
    // stop the loop when pointers meet 
    
    let newArr = [];
    let i = 0;
    let j = nums.length - 1;

    while (i != j) {
        let left = nums[i] * nums[i];
        let right = nums [j] * nums[j]; 
        if (left > right || left === right) {
            newArr.unshift(left);
            i++;
        } else {
            newArr.unshift(right);
            j--;
        }
    }

    newArr.unshift(nums[i] * nums[i]);
    return newArr;
    
};
