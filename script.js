document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});


const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".gallery-images");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

function moveCarousel(direction) {
if (direction === "next") {
    currentIndex = (currentIndex + 1) % images.length;
} else if (direction === "prev") {
    currentIndex =
    (currentIndex - 1 + images.length) % images.length;
}

const translateX = -currentIndex * 100; // 100% de deslocamento horizontal por imagem
carousel.style.transform = `translateX(${translateX}%)`;
}

nextButton.addEventListener("click", () => {
moveCarousel("next");
});

prevButton.addEventListener("click", () => {
moveCarousel("prev");
});

