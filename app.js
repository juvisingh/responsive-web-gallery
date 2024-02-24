function openSlideshow(){
    document.getElementById("slideshow").style.display = "block";
}
function closeSlideshow(){
    document.getElementById("slideshow").style.display = "none";
}
var index = 1;
function currentPicture(num) {
    showSlides(index = num);
}
function showSlides(slideNumber) {
    var slides = document.getElementsByClassName("slides");
    if (slideNumber > slides.length) {
        index = 1
    }
    if (slideNumber < 1) {
        index = slides.length
    }
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index-1].style.display = "block";
}
  
function moveSlide(num) {
    showSlides(index += num);
}
  