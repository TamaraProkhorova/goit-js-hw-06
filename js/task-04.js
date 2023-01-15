// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const buttonRefs = {
    reduceButton: document.querySelector("[data-action='decrement']"),
    increaseButton: document.querySelector("[data-action='increment']"),
}
// console.log(buttonRefs.reduceButton);
// console.log(buttonRefs.increaseButton);

buttonRefs.reduceButton.addEventListener("click", onReduceButtonClick);
buttonRefs.increaseButton.addEventListener("click", onIncreaseButtonClick);

let counterValue = 0;

function onReduceButtonClick(){
	counterValue -=1;
  document.getElementById('value').innerHTML = counterValue;
}

function onIncreaseButtonClick(){
	counterValue +=1;
  document.getElementById('value').innerHTML = counterValue;
}
