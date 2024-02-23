/*
How
select smallest or largest element from array and set to its correct index
eg : for largest find largest element and swap it with last index
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let last = arr.length - 1 - i;
        let maxIndex = getMaxIndex(arr, 0, last);

        // swap
        let temp = arr[maxIndex];
        arr[maxIndex] = arr[last];
        arr[last] = temp;
    }
    return arr;
}

function getMaxIndex(arr, start, end) {
    let maxIndex = start;
    for (let i = 0; i < end; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

// run
let arr = [ 3, 5, 4, 2, 6, 1,6];
console.log(selectionSort(arr));
