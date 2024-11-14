// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let foobar = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
foobar([
    {id: 1, name: 'Pit', age: 35},
    {id: 2, name: 'Pot', age: 45},
    {id: 3, name: 'Pet', age: 55}
])