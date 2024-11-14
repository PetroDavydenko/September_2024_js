// #59g0IsA
// - створити функцію яка створює параграф з текстом та
// виводить його через document.write. Текст задати через аргумент

let textParagraph = (text) => `<p>${text}</p>`;
document.write(textParagraph('hello world'))