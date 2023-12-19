const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(categories => {
const categoriesName = categories.querySelector('h2').textContent;
const categoriesEl = categories.querySelectorAll(`ul li`).length;

console.log(`Category: ${categoriesName}`);
console.log(`Elements: ${categoriesEl}`);
});



