var AjaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";

function getModel(modelName, readReady) {
  $.ajax(
    {
      url: AjaxHandlerScript,
      type: 'POST',
      data: {f: 'READ', n: 'ALESHCHYK_STUDYHELPER_' + modelName},
      cache: false,
      success: readReady,
      error: ErrorHandler
    }
  );
}

function lockModel(modelName, lockGetReady, password) {
  UpdatePassword = Math.random();

  $.ajax(
    {
      url: AjaxHandlerScript,
      type: 'POST',
      data: {
        f: 'LOCKGET', n: 'ALESHCHYK_STUDYHELPER_' + modelName,
        p: password
      },
      cache: false,
      success: lockGetReady,
      error: ErrorHandler
    }
  );
}


function updateModel(modelName, updateReady, data, password) {
  UpdatePassword = Math.random();

  $.ajax(
    {
      url: AjaxHandlerScript,
      type: 'POST',
      data: {
        f: 'UPDATE', n: 'ALESHCHYK_STUDYHELPER_' + modelName,
        v: JSON.stringify(data), p: password
      },
      cache: false,
      success: updateReady,
      error: ErrorHandler
    }
  );
}

function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
  modalErrHandler(StatusStr, ErrorStr);
}