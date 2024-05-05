
  document.getElementById('openGallery').addEventListener('click', function() {
    // Ouvrir une nouvelle fenêtre avec la galerie de photos
    var newWindow = window.open('gallery.html', '_blank', 'width=1000,height=600');
    if (newWindow) {
      newWindow.focus();
    } else {
      alert('Veuillez autoriser les popups pour afficher la galerie.');
    }
  });

  
function search() {
    var input = document.getElementById('searchInput').value;
    // Vous pouvez traiter la recherche ici, par exemple avec une requête AJAX
    // Pour cet exemple, affichons simplement les résultats dans la console
    console.log('Recherche:', input);
}

const gallery = document.querySelector('.gallery-container');
let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
    gallery.style.cursor = 'grabbing';
});

gallery.addEventListener('mouseleave', () => {
    isDown = false;
    gallery.style.cursor = 'grab';
});

gallery.addEventListener('mouseup', () => {
    isDown = false;
    gallery.style.cursor = 'grab';
});

gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2;
    gallery.scrollLeft = scrollLeft - walk;
});



$('.menu-btn').click(function(){
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
});

$('.accueil-btn').click(function(){
  $('ul .accueil-show').toggleClass("show");
  $('ul .first').toggleClass("rotate");
});
$('.contact-btn').click(function(){
  $('ul .contact-show').toggleClass("show1");
  $('ul .second').toggleClass("rotate");
});

$('ul li').click(function(){
  $(this).addClass("active").siblings().removeClass("active");
});

