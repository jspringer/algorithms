// JavaScript Bubble Sort

const a = [99, 1, 327, 25, 100, 0, 532, 203, 67];
 
function bubbleSort(arr)
{
    let swapped;
    do {
        swapped = false;
        for (let i=0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) { 

                let temp = arr[i];
                
                arr[i] = arr[i+1];
                
                arr[i+1] = temp;
                
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

console.log(bubbleSort(a));