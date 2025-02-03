document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();

    // Gradually darken and fade out background image when scrolling down
    const hero = document.querySelector(".hero");
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const maxScroll = window.innerHeight / 2; // Darken faster
        const opacity = Math.min(scrollPosition / maxScroll, 0.7); // Increase max opacity
        hero.style.setProperty('--darken-opacity', opacity);
        hero.style.opacity = 1 - opacity; // Fade out the background image
    });
});

function openPopup() {
    document.getElementById("contact-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("contact-popup").style.display = "none";
}

function openImageViewer(galleryId) {
    const images = {
        gallery1: [
            'images/project1.jpg',
            'images/project2.jpg',
            'images/project3.jpg'
        ],
        gallery2: [
            'images/palkmaja.jpg',
            'images/trepp.jpg',
            'images/katus.jpg'
        ],
        gallery3: [
            'images/interior1.jpg',
            'images/interior2.jpg',
            'images/interior3.jpg'
        ]
    };

    const popupImageContent = document.getElementById('popup-image-content');
    popupImageContent.innerHTML = '';

    images[galleryId].forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        popupImageContent.appendChild(img);
    });

    const popupImageViewer = document.getElementById('popup-image-viewer');
    popupImageViewer.style.display = 'flex';
    setTimeout(() => {
        popupImageViewer.classList.add('show');
    }, 10); // Delay to ensure display change is applied
}

function closeImageViewer() {
    const popupImageViewer = document.getElementById('popup-image-viewer');
    popupImageViewer.classList.remove('show');
    setTimeout(() => {
        popupImageViewer.style.display = 'none';
    }, 300); // Match the transition duration
}
