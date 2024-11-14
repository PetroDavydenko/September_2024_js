// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function minValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    return min;
    }
}
console.log(minValue([32, 9, 444, 11]));