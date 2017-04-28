(function(context){

  var logField = document.getElementById("log");

  blacklistedIds = ["none"];

  chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
      if (sender.id in blacklistedIds) {
        sendResponse({"result":"No se puede procesar el mensaje."});
        return;  // don't allow this extension access
      } else if (request.myCustomMessage) {
        appendLog(request.myCustomMessage);
        do_printer_alert("Ticket Obtenido", request);
        sendResponse({"result":"Ok, mensaje obtenido."});
      } else {
        sendResponse({"result":"Error."});
      }
    });

  var appendLog = function(message) {
    logField.innerText="\n"+message;
  }

  context.appendLog = appendLog;

})(window)

document.getElementById("cancel_ticket").addEventListener("click", function(){
  document.getElementById("log").innerHTML = "";
});
