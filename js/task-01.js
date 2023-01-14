// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const allCategoriesList = document.querySelectorAll("li.item")
console.log(`Number of categories: ${allCategoriesList.length}`);

// console.dir([...allCategoriesList]);
const categoriesList = document.querySelector("#categories");
// console.dir(categoriesList);
[...categoriesList.children].forEach((elem)=>{
    // console.dir(elem.children[0].textContent)
    console.dir(`Category: ${elem.firstElementChild.textContent}`);
    console.dir(`Elements: ${elem.lastElementChild.children.length}`);
})

