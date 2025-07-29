let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active-slide");
        dots[i].classList.remove("active");
    });
    slides[index].classList.add("active-slide");
    dots[index].classList.add("active");
}

function currentSlide(n) {
    currentIndex = n - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 4000);

// Modal functions
function openModal() {
    document.getElementById("ContactModal").style.display = "block";
}

function closeModal() {
    document.getElementById("ContactModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("ContactModal");
    if (event.target == modal) {
        closeModal();
    }
};
