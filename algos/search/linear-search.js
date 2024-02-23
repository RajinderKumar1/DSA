// how : one by one check all items in array and return when target element found

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }

    return -1;
};

// run
let arr = [20, 40, 10, 22, 50];
console.log(linearSearch(arr, 10));
