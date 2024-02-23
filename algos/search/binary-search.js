/*
how : 
1 find mid element 
2 divide array into two parts
3 if target > mid search in right part
4 if target < mid search in left part
5 else target index fond return mid
*/

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (target > arr[mid]) {
            start = mid + 1;
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
};

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            console.log("linear Search", i);
            return i;
        }
    }

    return -1;
};

// run

let arr = [3, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 8));
