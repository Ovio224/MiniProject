// 1: Set the text of the <h1> element
const hi = document.getElementById("header");
hi.textContent = "Hello there!";
// 2: Set the color of the <h1> to a different color
hi.style.color = "red";
// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const description = document.getElementsByClassName("desc")[0];
description.innerHTML = "<em>What are you up to my dude?</em>";
// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector("ul");
ul.className = "list";
// 5: Create a new list item and add it to the <ul>
const list = document.createElement("li");
const input = document.createElement("input");
input.type = "text";
list.textContent = "Live";
ul.appendChild(list);
list.appendChild(input);

// 6: Change all <input> elements from text fields to checkboxes
const allInput = document.querySelectorAll("input");
for (let i = 0; i < allInput.length; i++) {
  allInput[i].type = "checkbox";
}
// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const div = document.querySelector(".extra");
const button = document.createElement("button");
div.appendChild(button);
button.textContent = "Delete";
// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const parent = div.parentNode;
button.addEventListener("click", () => {
  parent.removeChild(div);
});
