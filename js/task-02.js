const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");

const list = [];

for (const element of ingredients) {
  const liEl = document.createElement("li");
  liEl.className = "item";
  liEl.innerHTML = element;
  list.push(liEl);
}

ingredientList.append(...list);
