$(document).on('click', '.btn-danger', () => {
  let clickRemove = new Audio();
  clickRemove.src = 'audio/clickRemove.mp3';

  function clickSoundDanger() {
    clickRemove.play();
  }

  clickSoundDanger();
});

$(document).on('click', '.btn-primary', () => {
  let clickPrimary = new Audio();
  clickPrimary.src = 'audio/clickPrimary.mp3';

  function clickSoundPrimary() {
    clickPrimary.play();
  }

  clickSoundPrimary();
});

$(document).on('click', '.btn-light', () => {
  let clickLinks = new Audio();
  clickLinks.src = 'audio/clickLinks.mp3';

  function clickSoundLinks() {
    clickLinks.play();
  }

  clickSoundLinks();
});

$(document).on('click', '.btn-success', () => {
  let clickRemove = new Audio();
  clickRemove.src = 'audio/clickSuccess.mp3';

  function clickSoundSuccess() {
    clickRemove.play();
  }

  clickSoundSuccess();
});