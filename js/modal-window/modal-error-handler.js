function modalErrHandler(errorTitleText, errorBodyText){
  $('#myModal').on('show.bs.modal', function (e) {
    $('#modalTitle').text(errorTitleText);
    $('#modalBodyText').text(errorBodyText);
  }).modal();
}