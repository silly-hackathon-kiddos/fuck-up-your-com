// Function to get count of tabs in current window. Required for the popoup display box.
function countTabsPlsss() {
    // Get the count
    chrome.tabs.query({currentWindow:true}, function(tabs) {
        let currentCount = tabs.length;
        
        // Write it to the store
        chrome.storage.sync.set({'currentTabCount': currentCount});
    });
}

// Get current total number of tabs
function printDataPlsss() {
    // Tab count
    var whatTheFuckShouldINameThisVar = chrome.storage.sync.get(['currentTabCount'], function(items){
        if (items.currentTabCount < 7) {
            document.getElementById('tab-count-tm').innerText = "You healthily have " + items.currentTabCount + " tabs.";
        } else {
            document.getElementById('tab-count-tm').innerText = items.currentTabCount + " tabs time to close shit!!!";
        }
    });
}

// Do something drastic when you have too many tabs


  


window.onload = function() {
    this.countTabsPlsss();
    this.printDataPlsss();
}

// Sound an alert when you have too many tabs