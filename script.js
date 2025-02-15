// Anda bisa menambahkan interaksi JavaScript di sini, misalnya untuk membuat slideshow gambar atau animasi sederhana.
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentSlide = 0;

function showSlide(n) {
    sliderContainer.style.transform = `translateX(-${n * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Autoplay (opsional)
let autoplayInterval = setInterval(nextSlide, 3000); // Ganti 3000 dengan interval yang diinginkan (dalam milidetik)

sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 3000);
});


