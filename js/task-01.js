const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);

for (let i = 0; i < itemsEl.length; i += 1) {
  const categoryEl = itemsEl[i].firstElementChild.innerText;
  const liElement = itemsEl[i].children[1].children.length;

  console.log(`Category: ${categoryEl}`);
  console.log(`Elements: ${liElement}`);
}
