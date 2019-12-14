const runalert = () => {
  chrome.tabs.executeScript({ file: 'alert.js' });
}

document.getElementById('destroy').addEventListener('click', runalert);