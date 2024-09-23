const row = document.querySelector(".row");
const kolom = document.querySelectorAll(".kolom");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentSlide = 0;

prev.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    row.style.transform = `translateX(${currentSlide * -100}%)`;
  }
});

next.addEventListener("click", () => {
  if (currentSlide < kolom.length - 1) {
    currentSlide++;
    row.style.transform = `translateX(${currentSlide * -100}%)`;
  }
});

row.style.transform = `translateX(${currentSlide * -100}%)`;
