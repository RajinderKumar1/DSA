/*
How
iterate entire array put largest item at the last of the array 

*/ 

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] < arr[j - 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j-1]
                arr[j-1] = temp;
            }
        }
    }
    return arr;
}

let arr = [7, 4, 6, 9, 3];

console.log(bubbleSort(arr));
