// content scripts run on the load of a webpage, and affects the content of the webpage
console.log("Content Script Run");

const destroy = () => {
  let paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style['backgroundColor'] = '#FF00FF'
  }
}

const gotMessage = (message, sender, sendResponse) => {
  console.log(message);
  if (message === "DESTROY") {
    destroy();
  } else {
    console.log("NO DESTROY");
  }
}
chrome.runtime.onMessage.addListener(gotMessage);