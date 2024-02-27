var slides = document.getElementsByClassName("slides");
var globalIndex = 1;
function openSlideshow(){
    document.getElementById("slideshow").style.display = "block";
}
function closeSlideshow(){
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    document.getElementById("container").style.display = "grid";
    document.documentElement.scrollTop = 0;
}
function currentPicture(index) {
    globalIndex = index;
    document.getElementById("slideshow").style.display = "block";
    if (index == 1) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg1").style.display = "block"
        document.getElementById('imggg1').style.width = "75%"
        document.getElementById('imggg1').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 0) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 2) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg2").style.display = "block"
        document.getElementById('imggg2').style.width = "75%"
        document.getElementById('imggg2').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 1) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 3) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg3").style.display = "block"
        document.getElementById('imggg3').style.width = "75%"
        document.getElementById('imggg3').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 2) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 4) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg4").style.display = "block"
        document.getElementById('imggg4').style.width = "75%"
        document.getElementById('imggg4').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 3) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 5) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg5").style.display = "block"
        document.getElementById('imggg5').style.width = "75%"
        document.getElementById('imggg5').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 4) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 6) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg6").style.display = "block"
        document.getElementById('imggg6').style.width = "75%"
        document.getElementById('imggg6').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 5) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 7) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg7").style.display = "block"
        document.getElementById('imggg7').style.width = "75%"
        document.getElementById('imggg7').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 6) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 8) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg8").style.display = "block"
        document.getElementById('imggg8').style.width = "75%"
        document.getElementById('imggg8').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 7) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
}
function moveSlide(num) {
    if (globalIndex + num > 8) {
        currentPicture(1)
    }
    else if (globalIndex + num == 0) {
        currentPicture(8)
    }
    else {
        currentPicture(globalIndex + num)
    }
}