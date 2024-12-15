window.onload = function() { //für onload fadein
  document.body.setAttribute("class", "loaded");
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function mymenudrop() { //damit es beim klick ausgefahren wird
  document.getElementById("menu").classList.toggle("show");
}
window.onclick = function(event) { //damit es beim click irgendwo auf dem Bildschirm eingefahren wird
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("menubar");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
