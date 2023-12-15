// FIRST ATTEMPT

// sock merchant 
//      here is a large pile of socks that must be paired by color. 
//      given an array of integers representing the color of each sock, 
//      determine how many pairs of socks with matching colors there are.
//      --> INPUT: array with integers representing sock color
//      --> OUTUT: interger determined number of matching colors 

function sockMerchant(ar) {

    let compareArr = [];
    let count = 0;
    for (let i=0; i <= ar.length -1; i++) {
        if (i == 0) {
            compareArr.push(ar[i]);
        } else {
            if (compareArr.includes(ar[i])) {
                let indexToPop = compareArr.indexOf(ar[i]);
                compareArr.splice(indexToPop, 1);
                count += 1;
            } else {
                compareArr.push(ar[i]);
            }
        }
    }
    return count;

}
