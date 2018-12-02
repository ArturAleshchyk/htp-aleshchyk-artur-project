function modalErrHandler(errorTitleText, errorBodyText){
  $('#myModal').on('show.bs.modal', () => {
    $('#modalTitle').text(errorTitleText);
    $('#modalBodyText').text(errorBodyText);
  }).modal();
}