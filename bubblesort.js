// 1. def func that takes an array as argument
// 2. initialize N as the length of the aray
// 3. outer loop that iterates from 1 to n-1
// 4. inner loop  interates from 0 to n-2 compares adjacent
//    elements and swps the mif in wrong order
// 5. Comparison and swap: if array[j] > array[j+1] is true
//    the elements are swaped using the temp variable
// 6. Return sorted array.

function bubbleSort(arr) {
    let N = arr.length;
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < N - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let exampleArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", exampleArray);

let sortedArray = bubbleSort(exampleArray);
console.log("Sorted array:", sortedArray);
