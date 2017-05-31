(function(context){

  var logField = document.getElementById("log");

  var appendLog = function(message) {
    logField.innerText=message;
  }

  context.appendLog = appendLog;

})(window)
