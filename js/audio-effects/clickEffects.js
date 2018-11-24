//Danger buttons
$(document).on('click', '.btn-danger', () => {
  let clickRemove = new Audio();
  clickRemove.src = 'audio/clickRemove.mp3';

  function clickSoundDanger() {
    clickRemove.play();
  }

  clickSoundDanger();
});

//Primary buttons
$(document).on('click', '.btn-primary', () => {
  let clickRemove = new Audio();
  clickRemove.src = 'audio/clickPrimary.mp3';

  function clickSoundPrimary() {
    clickRemove.play();
  }

  clickSoundPrimary();
});

//Link buttons
$(document).on('click', '.btn-light', () => {
  let clickRemove = new Audio();
  clickRemove.src = 'audio/clickLinks.mp3';

  function clickSoundLinks() {
    clickRemove.play();
  }

  clickSoundLinks();
});