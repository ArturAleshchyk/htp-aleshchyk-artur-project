document.getElementById('myForm').addEventListener('submit', saveBookmark);
function saveBookmark(eo) {
  //Get form values
  const siteName = document.getElementById('siteName').value;
  const siteUrl = document.getElementById('siteUrl').value;

  console.log(siteName + ' ' + siteUrl);

  //Prevent form from submitting
  eo.preventDefault();
}