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

    // Interactive popup for gallery images
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    const popupImage = document.createElement("div");
    popupImage.classList.add("popup-image");
    popupImage.innerHTML = '<span class="close-btn">&times;</span><img src="" alt="Popup Image">';
    document.body.appendChild(popupImage);

    galleryImages.forEach((img) => {
        img.addEventListener("click", function () {
            popupImage.style.display = "flex";
            popupImage.querySelector("img").src = this.src;
        });
    });

    popupImage.querySelector(".close-btn").addEventListener("click", function () {
        popupImage.style.display = "none";
    });

    // Close popup image when clicking outside the image
    popupImage.addEventListener("click", function (e) {
        if (e.target === popupImage) {
            popupImage.style.display = "none";
        }
    });

    // Load More button functionality with smooth scrolling
    const loadMoreButton = document.getElementById("load-more");
    loadMoreButton.addEventListener("click", function () {
        const hiddenImages = document.querySelectorAll(".gallery-grid img.hidden");
        hiddenImages.forEach((img, index) => {
            if (index < 5) { // Show 5 more images
                img.classList.remove("hidden");
            }
        });
        if (document.querySelectorAll(".gallery-grid img.hidden").length === 0) {
            loadMoreButton.style.display = "none"; // Hide button if no more images
        }
        // Smooth scroll to the newly revealed images
        hiddenImages[0].scrollIntoView({ behavior: 'smooth' });
    });
});

function openPopup() {
    document.getElementById("contact-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("contact-popup").style.display = "none";
}
