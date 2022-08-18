// Automated and manual Slide Show 
slideIndex = 1;

const plusSlides = n => {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    if (n === -1) {
        myTimer = setInterval(function() {plusSlides(n + 2)}, 4000);
    } else {
        myTimer = setInterval(function() {plusSlides(n + 1)}, 4000);
    }
}

const showSlides = n => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if(n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() {plusSlides(1)}, 4000);
})