document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(eo) {
  //Get form values
  const siteName = document.getElementById('siteName').value;
  const siteUrl = document.getElementById('siteUrl').value;

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
}

//delete bookmark
function deleteBookmark(url) {
  console.log(url);
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
                                     <h3>${name}
                                       <a class="btn btn-light" target="_blank" href="http://${url}">Visit</a>
                                       <a class="btn btn-danger" onclick="deleteBookmark('${url}')" href="#">Delete</a>
                                     </h3>
                                   </div>`;
  }
}