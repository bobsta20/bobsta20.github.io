var slideIndex = 1;
showSlides(slideIndex);

document.getElementById("left-nav").addEventListener("click", function() {
    plusSlides(-1);
});
document.getElementById("right-nav").addEventListener("click", function() {
    plusSlides(1);
});

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