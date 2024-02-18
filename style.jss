function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

function generateRandomArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

function visualizeSorting(arr) {
    const container = document.getElementById('array-container');
    container.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement('div');
        bar.classList.add('array-bar');
        bar.style.height = `${arr[i] * 2}px`;
        container.appendChild(bar);
    }
}

document.getElementById('generate-array').addEventListener('click', () => {
    const size = 50; // Change the size as needed
    const array = generateRandomArray(size);
    visualizeSorting(array);
});

document.getElementById('sort').addEventListener('click', () => {
    const array = Array.from(document.querySelectorAll('.array-bar')).map(bar => parseInt(bar.style.height) / 2);
    const sortedArray = bubbleSort(array);
    visualizeSorting(sortedArray);
});
