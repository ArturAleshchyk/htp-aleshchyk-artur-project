var images = document.images;
var imagesTotalCount = images.length;
var preloader = document.getElementById('page-preloader');
var imagesLoadedCount = 0;
var percDisplay = document.getElementById('load-perc');

for (var i = 0; i < imagesTotalCount; i++) {
  var imageClone = new Image();
  imageClone.onload = loadImages;
  imageClone.onerror = loadImages;
  imageClone.src = images[i].src;
}

function loadImages() {
  imagesLoadedCount++;
  percDisplay.innerHTML = (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + '%';

  if (imagesLoadedCount >= imagesTotalCount) {
    setTimeout(function () {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }, 1000);
  }
}