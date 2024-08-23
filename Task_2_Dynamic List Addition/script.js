let input = document.getElementById("input");
let btn = document.getElementById("addButton");
let items = document.getElementById("items");

btn.addEventListener("click", function () {
  if (input !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    items.appendChild(li);
    input.value = "";
  }
});
