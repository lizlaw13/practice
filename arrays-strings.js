// REVERSE STRING 
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(s) {
    // use two pointers method 
    // start one pointer at the beginning and one at the end 
    // take each pointer and swap the letters
    // once they are swaped move pointer closer to the center 
    // stop the loop  pointers meet 
    
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
