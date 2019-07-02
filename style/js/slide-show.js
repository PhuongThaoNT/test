var slideIndex = 1;

showSlides(slideIndex, 'intro-slide', 'number-slide', 'intro-text-slide');
showSlides(slideIndex, 'welcome-slide', 'dot');

showSlide(slideIndex, 'partner-list');

function plusSlides(n, pageCurrentClass, numberPageCurrentClass, introSlideClass) {
    showSlides(slideIndex += n, pageCurrentClass, numberPageCurrentClass, introSlideClass);
}

function currentSlide(n, pageCurrentClass, numberPageCurrentClass, introSlideClass) {
    showSlides(slideIndex = n, pageCurrentClass, numberPageCurrentClass, introSlideClass);
}

function showSlides(n, pageCurrentClass, numberPageCurrentClass, introSlideClass) {
    var i;
    var slides = document.getElementsByClassName(pageCurrentClass);
    
    
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
    slides[slideIndex - 1].style.display = "block";
}

function activeOrDisableCurrentNumberPageControl(numberPageCurrentClass) {
    var dots = document.getElementsByClassName(numberPageCurrentClass);
    if(numberPageCurrentClass) {
        
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    }
}

function checkToDisplayOrNoneAnElement(element){
    if(element) {
        var elements = document.getElementsByClassName(element);
        for (i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        elements[slideIndex - 1].style.display = "block";
    }
}
