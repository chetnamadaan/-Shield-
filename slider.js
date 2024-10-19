let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    slideIndex += n;
    let slides = document.querySelectorAll(".slide");
    let totalSlides = slides.length;

    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = totalSlides;
    }

    showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(); 
    setInterval(showSlides, 5000); 
});
