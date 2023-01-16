// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.


// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const textInput = document.querySelector('#validation-input');
const lengthSymbols = Number(textInput.dataset.length);

// console.log(textInput)
// console.log(lengthSymbols)

textInput.addEventListener("blur", handleBlure);

textInput.classList.add('invalid');
 textInput.classList.add('valid');
function handleBlure(event) {
    if (event.target.value.length === lengthSymbols) {
        textInput.classList.replace('invalid','valid');
    }else {
        textInput.classList.replace('valid','invalid');
}
console.log(event.target.value.length === lengthSymbols)
}