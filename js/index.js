$(document).ready(loadLayout);

function Progress(EO) {
  if (EO.lengthComputable) {
    var Perc = Math.round(EO.loaded / EO.total * 100);
      $('#load-perc').text(Perc + "%");
      if (Perc === 100) {
        $('#page-preloader').addClass('done');
      }
  }
}

function removeActive() {
  $('nav .nav-link').each((id, item) => {
    $(item).removeClass('active');
    $(item).blur();
  });
}

function navigateTo(url) {
  if (event) {
    event.preventDefault();
  }
  $('#page-preloader').removeClass('done');
  $.ajax(url +'.html', {
    type: 'POST',
    xhrFields: {onprogress: Progress},
    success: function (data) {
      $('#main').html(data);
      removeActive();
      $('#' + url).addClass('active');
      $('#page-preloader').addClass('done');
    },

    error: function (e) {
      alert('asdasdasdasd');
    }
  })
}



function loadLayout() {
  navigateTo('home');
}