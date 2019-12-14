// Get alert number
// Function to get count of tabs in current window. Required for the popoup display box.
function getCurrentWindowTabCount() {
    chrome.tabs.query({currentWindow:true}, function(tabs) {
        return tabs.length;
    });
}

// Save the tab counter to Chrome extension storage API
chrome.storage.sync.set({'tabCount': getCurrentWindowTabCount()}, function() {
    console.log('Settings saved');
});



// Get current total number of tabs


// Sound an alert when you have too many tabs