// JavaScript Insertion Sort

const a = [99, 1, 327, 25, 100, 0, 532, 203, 67];

function insertionSort(items) {

    for (let i = 0; i < items.length; i++) {

        let value = items[i];

        for (let j = i-1; (j > -1) && (items[j] > value); j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
    }

    return items;
}

console.log(insertionSort(a));