const images = document.images;
const imagesTotalCount = images.length;
const preloader = document.getElementById('page-preloader');
let imagesLoadedCount = 0;
const percDisplay = document.getElementById('load-perc');

for (let i = 0; i < imagesTotalCount; i++) {
  const imageClone = new Image();
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