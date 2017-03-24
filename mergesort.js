// JavaScript Merge Sort

const a = [99, 1, 327, 25, 100, 0, 532, 203, 67];
 
function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;
 
    let middle = parseInt(arr.length / 2),
        left   = arr.slice(0, middle),
        right  = arr.slice(middle, arr.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    let result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}

console.log(mergeSort(a));