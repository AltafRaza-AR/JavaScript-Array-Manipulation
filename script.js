let numbers = [5, 3, 8, 1, 21];

function displayArray(id, array) {
    document.getElementById(id).textContent = array.join(", ");
}

function displayValue(id, value) {
    document.getElementById(id).textContent = value;
}

function addNumber(array, number) {
    array.push(number);
    displayArray("updated-array", array);
}

function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
    displayArray("updated-array", array);
}

function sortNumbers(array) {
    let sortedArray = [...array].sort((a, b) => a - b);
    displayArray("sorted-array", sortedArray);
    return sortedArray;
}

function calculateSum(array) {
    let sum = array.reduce((acc, num) => acc + num, 0);
    displayValue("sum", sum);
    return sum;
}

function calculateAverage(array) {
    let sum = calculateSum(array);
    let average = sum / array.length;
    displayValue("average", average);
    return average;
}

document.addEventListener("DOMContentLoaded", function() {
    displayArray("original-array", numbers);
    
    addNumber(numbers, 10);
    removeNumber(numbers, 8);
    sortNumbers(numbers);
    calculateSum(numbers);
    calculateAverage(numbers);
});
