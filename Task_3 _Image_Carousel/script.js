let images = document.querySelectorAll(".images-container img");
let currIndex = 0;

function showNextImage() {
  images[currIndex].classList.remove("active");
  currIndex = (currIndex + 1) % images.length;
  images[currIndex].classList.add("active");
}

setInterval(showNextImage, 3000);

// extra code....

setInterval(showNextImage, 3000);
