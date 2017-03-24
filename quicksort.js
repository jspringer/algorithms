// JavaScript Quick Sort

const a = [99, 1, 327, 25, 100, 0, 532, 203, 67];

function quickSort(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    let left = [], 
        right = [], 
        pivot = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
  
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(a));