// JavaScript Binary Search 

let a = [99, 1, 327, 25, 100, 0, 532, 203, 67];
const searchNum = 100;

a.sort(function (a, b) {
    return a - b;
});

function binarySearch(arr, i) {
    let mid = Math.floor(arr.length / 2);
    
    if (arr[mid] === i) {
        return "found!"; // or return arr[mid]

    } else if (arr[mid] < i && arr.length > 1) {
        return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);

    } else if (arr[mid] > i && arr.length > 1) {
        return binarySearch(arr.splice(0, mid), i);

    } else {
        return "not found!"; // or return -1
    }
    
}

const result = binarySearch(a, searchNum);

console.log(searchNum + " was " + result);
