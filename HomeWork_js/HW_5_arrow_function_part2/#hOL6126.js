// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його
// через document.write. Текст li задати через аргумент всім однаковий

let list = (text) => `<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`;
document.write(list('hello world'));