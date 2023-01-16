// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.


// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const textInput = document.querySelector('#validation-input');
const lengthSymbols = Number(textInput.dataset.length);

console.log(textInput)
console.log(lengthSymbols)

textInput.addEventListener("blur", handleBlure);

function handleBlure(event) {
    if (event.target.value.length === lengthSymbols) {
        textInput.classList.add('valide');
        textInput.classList.remove('invalide');
    }else {
        textInput.classList.replace('invalide', 'valide');
}
console.log(event.target.value.length === lengthSymbols)
}