// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.


// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createButton: document.querySelector("[data-create]"),
  markupContainer: document.querySelector("#boxes"),
  destroyButton: document.querySelector("[data-destroy]")
}

refs.createButton.addEventListener("click", onCreateButtonClick);
function onCreateButtonClick () {
  createBoxes(5)
}

function createBoxes(amount) {
  let sizes = 30;
  const arrayElements = [];
  for (let index = 0; index < amount; index +=1) {
    const div = document.createElement("div");
    div.style.width = `${sizes}px`;
    div.style.height = `${sizes}px`;
    div.style.backgroundColor = getRandomHexColor();
    sizes += 10;
    arrayElements.push(div);
  }
  refs.markupContainer.append(...arrayElements)
}

refs.destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.markupContainer.innerHTML = " ";
}
