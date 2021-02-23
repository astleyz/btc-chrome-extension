chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (currentTabInfo) => {
    // chrome.tabs.insertCSS({ file: "../content/main.css" });
    console.log(currentTabInfo);
  });
});

export {};
