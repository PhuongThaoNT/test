var slideIndex = 1;
showSlides(slideIndex, 'intro-slide', 'number-slide');
showSlides(slideIndex, 'welcome-slide', 'dot');

function plusSlides(n, pageCurrentClass, numberPageCurrentClass) {
    showSlides(slideIndex += n, pageCurrentClass, numberPageCurrentClass);
}

function currentSlide(n, pageCurrentClass, numberPageCurrentClass) {
    showSlides(slideIndex = n, pageCurrentClass, numberPageCurrentClass);
}

function showSlides(n, pageCurrentClass, numberPageCurrentClass) {
    var i;
    var slides = document.getElementsByClassName(pageCurrentClass);
    var dots = document.getElementsByClassName(numberPageCurrentClass);
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}