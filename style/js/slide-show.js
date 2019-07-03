var slideIndex = 1;

showSlides(slideIndex, 'intro-slide', 'number-slide', 'intro-text-slide');
showSlides(slideIndex, 'welcome-slide', 'dot');

showSlides(slideIndex, 'partner-list');

function plusSlides(n, pageCurrentClass, numberPageCurrentClass, introSlideClass) {
    showSlides(slideIndex += n, pageCurrentClass, numberPageCurrentClass, introSlideClass);
}

function currentSlide(n, pageCurrentClass, numberPageCurrentClass, introSlideClass) {
    showSlides(slideIndex = n, pageCurrentClass, numberPageCurrentClass, introSlideClass);
}

function showSlides(n, pageCurrentClass, numberPageCurrentClass, introSlideClass) {
    var i;
    var slides = document.getElementsByClassName(pageCurrentClass);
    debugger;

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    activeOrDisableCurrentNumberPageControl(numberPageCurrentClass);

    checkToDisplayOrNoneAnElement(introSlideClass);
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }

}

function activeOrDisableCurrentNumberPageControl(numberPageCurrentClass) {
    debugger;
    var dots = document.getElementsByClassName(numberPageCurrentClass);
    if (numberPageCurrentClass) {
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].className += " active";
        }

    }
}

function checkToDisplayOrNoneAnElement(element) {
    if (element) {
        var elements = document.getElementsByClassName(element);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        if (elements[slideIndex - 1]) {
            elements[slideIndex - 1].style.display = "block";
        }

    }
}