// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function foobar(arrayElementsPrimitive) {
    document.write(`<ul>`)
    for (const item of arrayElementsPrimitive) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}
foobar([100, 39, true, false, 'hello world'])