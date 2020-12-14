var slideIndex = 1;
var menuShown = false;
showSlides(slideIndex);
const screenEnlarge = window.matchMedia('(min-width: 701px)');
const screenShrink = window.matchMedia('(max-width: 700px)');
screenEnlarge.addEventListener('change', screenSizeChange);

function screenSizeChange() {
    if (screenEnlarge.matches) {
        document.getElementById("main-nav").style.display = "inline-flex";
        menuShown = false;
    }
    if (screenShrink.matches) {
        document.getElementById("main-nav").style.display = "none";
    }
}

document.getElementById("left-nav").addEventListener("click", function() {
    plusSlides(-1);
});
document.getElementById("right-nav").addEventListener("click", function() {
    plusSlides(1);
});

function toggleMenu() {
    nav = document.getElementById("main-nav");
    if(menuShown) {
        nav.style.display = "none";
        menuShown = false;
    } else {
        nav.style.display = "block";
        menuShown = true;
    }
}

function plusSlides(n) {
    showSlides(slideIndex+=n);
}

function currentSlide(n) {
    showSlides(slideIndex=n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("design-slide");
    if(n>slides.length) {slideIndex = 1}
    if (n<1) {slideIndex = slides.length}
    for (i=0;i<slides.length;i++) {
        slides[i].style.display = "none"
    }
    var currentSlide = slides[slideIndex-1];
    var slideHeader = currentSlide.childNodes[1].childNodes[1];
    if(slideHeader.innerHTML[1]=='.') {
        slideHeader.innerHTML[0] = slideIndex.toString();
    } else {
        slideHeader.innerHTML = slideIndex.toString() + ". " + slideHeader.innerHTML;
    }
    currentSlide.style.display = "block";
}