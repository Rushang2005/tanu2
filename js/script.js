
function reveal(type) {
  const gift = document.getElementById("gift");
  gift.classList.remove("hidden");
  if (type === "cute") {
    gift.innerHTML = "💌 I promise to love you endlessly, support you fearlessly, and grow with you gracefully. You’ll never face a moment alone, not while I’m here. 💖";
  } else {
    gift.innerHTML = "🔥 Tonight, I’m yours. One wild wish, no limits. Just say the word, and I’ll make it unforgettable. 😘";
  }
}

let currentSlide = 0;
const slides = document.getElementsByClassName("slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlide].style.display = "block";
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000);
