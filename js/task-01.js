const listCategories = document.querySelector("#categories");
const allItemsCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${listCategories.children.length}`);
console.log("");

// allItemsCategories.forEach((elem) => {
//   console.log(`Category: ${elem.querySelector("h2").textContent}`);
//   console.log(`Elements: ${elem.querySelectorAll("li").length}`);
//   console.log("");
// });

allItemsCategories.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
  console.log("");
});
