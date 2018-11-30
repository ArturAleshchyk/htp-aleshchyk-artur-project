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

function loadLayout() {
  debugger;
  var URLHash = JSON.parse(decodeURIComponent(window.location.hash.substr(1)));
  navigateTo(URLHash.pagename || 'home');
}

window.onhashchange = SwitchToStateFromURLHash;

var SPAStateH = {};

function SwitchToStateFromURLHash(hash) {
  var URLHash = window.location.hash || hash;

  var StateJSON = decodeURIComponent(URLHash.substr(1));

  if (StateJSON !== "")

    SPAStateH = JSON.parse(StateJSON);

  else
    SPAStateH = {pagename: 'home'};

  console.log('Новое состояние приложения:');
  console.log(SPAStateH);

  navigateTo(SPAStateH.pagename);
}

function navigateTo(url) {
  if (event) {
    event.preventDefault();
  }
  // $('#page-preloader').removeClass('done'); //bug
  $.ajax(url + '.html', {
    type: 'POST',
    xhrFields: {onprogress: Progress},
    success: function (data) {
      $('#main').html(data);
      removeActive();
      $('#' + url).addClass('active');
      // $('#page-preloader').addClass('done');
    },

    error: function (e) {
      modalErrHandler('Server error', 'Error 404');
    }
  })
}

function switchToPage(pageName) {
  switchToState({pagename: pageName});
}

function switchToState(NewStateH) {
  window.location.hash = encodeURIComponent(JSON.stringify(NewStateH));
  SwitchToStateFromURLHash('#' + encodeURIComponent(JSON.stringify(NewStateH)));
}

SwitchToStateFromURLHash();