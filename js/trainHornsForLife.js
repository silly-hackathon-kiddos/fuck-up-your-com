var annyeongSound = new Audio(chrome.runtime.getURL('../audio/bus-horn.ogg'));

function toAudioOrNotToAudio() {
    chrome.tabs.query({currentWindow:true}, function(tabs) {
        if (tabs.length > 6) {
            if (annyeongSound.paused) {
                annyeongSound.loop = true;
                annyeongSound.play();
            }
        } else {
            annyeongSound.pause();
        }
    })
}

chrome.tabs.onCreated.addListener(
    function() {
        toAudioOrNotToAudio();
    }
)

chrome.tabs.onRemoved.addListener(
    function() {
        toAudioOrNotToAudio();
    }
)