// Sort array partially like first sort first half of the array then second and so on

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}
// run
let arr = [4, 6, 2, 4, 6, 1,5];
console.log(insertionSort(arr));
