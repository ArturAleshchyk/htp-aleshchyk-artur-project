document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(eo) {
  //Get form values
  eo.preventDefault();
  const siteName = document.getElementById('siteName').value;
  const siteUrl = document.getElementById('siteUrl').value;

  if (!siteName || !siteUrl) {
    $('#myModal').on('show.bs.modal', function (e) {
      $('#modalTitle').text('Input ERROR');
      $('#modalBodyText').text('Please fill all forms.');
    }).modal();
    return false;
  }

  //Regular expression for url links
  let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  let regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    $('#myModal').on('show.bs.modal', function (e) {
      $('#modalTitle').text('URL ERROR');
      $('#modalBodyText').text('You must add valid URL.');
    }).modal();
    return false;
  }

  const bookmark = {
    name: siteName,
    url: siteUrl,
  };

  if (localStorage.getItem('bookmarks') === null) {
    //init array
    let bookmarks = [];
    //Add to array
    bookmarks.push(bookmark);
    //Set to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    //Get bookmarks from local storage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Add bookmark to array
    bookmarks.push(bookmark);
    //Rewrite local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  //Prevent form from submitting
  eo.preventDefault();

  //Refetch bookmarks
  fetchBookmarks()
}

//delete bookmark
function deleteBookmark(url) {
  //get bookmarks from local storage
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url === url) {
      //remove from array
      bookmarks.splice(i, 1);
    }
  }
  //Rewrite local storage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  //Refetch bookmarks
  fetchBookmarks()
}

function fetchBookmarks() {
  //get bookmarks from local storage
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //get bookmarks results
  const bookmarksResults = document.getElementById('bookmarksResults');
  //add items to html
  bookmarksResults.innerHTML = '';

  for (let i = 0; i < bookmarks.length; i++) {
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;

    bookmarksResults.innerHTML += `<div class="text-capitalize">
                                     <h5 style="display: flex; justify-content: space-between; align-items: center">${name}
                                       <div>
                                         <a class="btn btn-light" target="_blank" href="${url}">Visit</a>
                                         <a class="btn btn-danger" onclick="deleteBookmark('${url}')" href="#">Delete</a>
                                       </div>
                                     </h5>
                                   </div>`;
  }
}