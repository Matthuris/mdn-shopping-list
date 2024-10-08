"use strict";

function select(el) {
  return document.querySelector(el);
}

const list = select("ul");
const input = select("input");
const button = select("button");

button.addEventListener("click", function () {
  const item = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listSpan = document.createElement("span");
  const listButton = document.createElement("button");

  listItem.appendChild(listSpan);
  listItem.appendChild(listButton);

  listSpan.textContent = item;
  listButton.textContent = "Delete";

  list.appendChild(listItem);

  listButton.addEventListener("click", function () {
    list.removeChild(listItem);
  });
  input.focus();
});
