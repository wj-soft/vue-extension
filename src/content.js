console.log("CONTENT")

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    // sidebar 이벤트 메세지 수신
    if (request.status === "success") {

      sendResponse({ result: "OK" });
    }
  });