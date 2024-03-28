var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery_inner img');
var gallery = document.querySelector('.gallery');
var currentIndex = 0;

function showGallery(index){
    galleryImg.src = images[index].src;
    currentIndex = index;
    gallery.classList.add('show');
}

function hideGallery(){
    gallery.classList.remove('show');
}

images.forEach(function(item, index) {
    item.addEventListener('click', function() {
        showGallery(index);
    });
});

close.addEventListener('click', hideGallery);

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
        hideGallery();
    }
});

prev.addEventListener('click', function() {
    if (currentIndex > 0) {
        showGallery(currentIndex - 1);
    }
});

next.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
        showGallery(currentIndex + 1);
    }
});
