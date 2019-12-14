// background scripts run on the launch of chrome and looks out for chrome specific events.

console.log("Background Script Running");

const clickButton = (tab) => {
  console.log(tab);
  let message = { txt: "DESTROY" };
  chrome.tabs.sendMessage(tab.id, message);
}

chrome.browserAction.onClicked.addListener(clickButton);
