"use strict";

function select(el) {
  return document.querySelector(el);
}

const list = select("ul");
const input = select("input");
const addButton = select("button.add-item");
const button = select("button");

addButton.addEventListener("click", function () {
  const item = input.value;
  input.value = "";
  const listItem = document.createElement("li");
  const listSpan = document.createElement("span");
  const listButton = document.createElement("button");
  listItem.appendChild(listSpan);
  listItem.appendChild(listButton);
  listSpan.textContent = item;
  listButton.classList.add("delete");
  listButton.textContent = "Delete";
  list.appendChild(listItem);
});
list.addEventListener("click", function (e) {
  e.target.classList.contains("delete")
    ? e.target.parentElement.remove()
    : null;
});
