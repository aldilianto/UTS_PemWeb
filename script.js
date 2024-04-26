const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
    var images = [
        "images/bg.jpg",
        "images/background.jpeg",
        "images/kopi.jpg"
    ];

    var index = 0;
    var hero = document.getElementById("hero");

    function changeBackground() {
        hero.style.backgroundImage = "url('" + images[index] + "')";
        index = (index + 1) % images.length;
        setTimeout(changeBackground, 5000);
    }

    changeBackground(); 
});
