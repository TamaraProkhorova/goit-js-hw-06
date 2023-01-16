// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const valueInput = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

console.log(valueInput);
console.log(spanText);

valueInput.addEventListener("input", onInputFontSize);

function onInputFontSize() {
    spanText.style.fontSize = `${valueInput.value}px`
};