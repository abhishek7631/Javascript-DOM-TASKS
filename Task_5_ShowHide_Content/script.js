let btn = document.getElementById("btn");
let text = document.getElementById("text");
btn.addEventListener("click", function () {
  if (text.style.display === "none") {
    text.style.display = "block";
    btn.textContent = "Hide";
  } else {
    text.style.display = "none";
    btn.textContent = "Show";
  }
});
