document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newCategoryForm = document.getElementById("create-category-form");
  const newCategoryName = document.getElementById("new-category-name");

  //ul where new tasks will live on the DOM
  const newCatUl = document.getElementById("cats");

  //attach event listeners
  newCategoryForm.addEventListener("submit", createNewCategory)


});

const createNewCategory = event => {
    event.preventDefault();
    //stop form from trying to submit

    const newCategoryName = document.getElementById("new-category-name");
    const newCat = document.createElement("li");
    newCat.innerText = newCategoryName.value;

    appendNewCategory(newCat);
    event.target.reset();
};

const appendNewCategory = cat => {
    document.getElementById("cats").appendChild(cat);
}