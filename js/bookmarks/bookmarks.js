var bookmarks = [];
document.getElementById('myForm').addEventListener('submit', saveBookmark);
fetchBookmarks();

function saveBookmark(eo) {
  //Get form values
  eo.preventDefault();
  var password = Math.random();
  const siteName = document.getElementById('siteName').value;
  const siteUrl = document.getElementById('siteUrl').value;

  if (!siteName || !siteUrl) {
    modalErrHandler('Input ERROR', 'Please fill all forms');
    return false;
  }

  //Regular expression for url links
  let expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
  let regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    modalErrHandler('URL ERROR', 'You must add valid URL');
    return false;
  }

  const bookmark = {
    name: siteName,
    url: siteUrl,
  };

  bookmarks.push(bookmark);

  lockModel('BOOKMARK', () => {
    updateModel('BOOKMARK', () => {
      fetchBookmarks();
    }, bookmarks, password);
  }, password);
  //Prevent form from submitting
  eo.preventDefault();

  //Refetch bookmarks
  fetchBookmarks()
}

//delete bookmark
function deleteBookmark(url) {
  //get bookmarks from local storage
  var password = Math.random();
  for (let i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url === url) {
      //remove from array
      bookmarks.splice(i, 1);
    }
  }
  //Rewrite local storage
  lockModel('BOOKMARK', () => {
    updateModel('BOOKMARK', () => {
      fetchBookmarks();
    }, bookmarks, password);
  }, password);

}

function fetchBookmarks() {
  //get bookmarks from local storage
  getModel('BOOKMARK', (data) => {
    bookmarks = data.result ? JSON.parse(data.result) : [];
    //get bookmarks results
    const bookmarksResults = document.getElementById('bookmarksResults');
    //add items to html
    if (bookmarksResults) {
      bookmarksResults.innerHTML = '';
    }

    for (let i = 0; i < bookmarks.length; i++) {
      let name = bookmarks[i].name;
      let url = bookmarks[i].url;

      bookmarksResults.innerHTML += `<div class="text-capitalize">
                                     <h5 style="display: flex; justify-content: space-between; align-items: center">${name}
                                       <div>
                                         <a class="btn btn-light" target="_blank" href="${url}">Visit</a>
                                         <a class="btn btn-danger" onclick="deleteBookmark('${url}')">Delete</a>
                                       </div>
                                     </h5>
                                   </div>`;
    }
  });

}