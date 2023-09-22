// Função para rolar suavemente para as âncoras de navegação
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

const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".image-services");
const imageWidth = images[0].clientWidth;
let currentIndex = 0;

function moveCarousel(direction) {
    if (direction === "next") {
        currentIndex = (currentIndex + 1) % images.length;
    } else if (direction === "prev") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }

    const translateX = -currentIndex * imageWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

document.querySelector(".next-button").addEventListener("click", () => {
    moveCarousel("next");
});

document.querySelector(".prev-button").addEventListener("click", () => {
    moveCarousel("prev");
});

