// JavaScript Heap Sort

const a = [99, 1, 327, 25, 100, 0, 532, 203, 67];

let arrayLength;

function swap(arr, indexOne, indexTwo) {
    const temp = arr[indexOne];

    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
}

function buildHeap(arr) {
    arrayLength = arr.length;

    for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
        maxHeap(arr, i);
    }
}

function maxHeap(arr, i) {
    let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < arrayLength && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < arrayLength && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        swap(arr, i, largest);
        maxHeap(arr, largest);
    }
}

function heapSort(arr) {
    buildHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        arrayLength--;
        maxHeap(arr, 0);
    }
    return arr;
}

console.log(heapSort(a));