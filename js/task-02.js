const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

function createItemsMarkup(ingredients){
  return ingredients.map((ingredient)=>{
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    return li
  })
}
const ingredientsListRef = document.getElementById("ingredients");
ingredientsListRef.append(...createItemsMarkup(ingredients))
// console.log(createItemsMarkup(ingredients))