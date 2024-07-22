chrome.commands.onCommand.addListener(function (command) {
  if (command === "open-gmail") {
    const gmailUrl = "https://mail.google.com/mail/u/0/";

    // すでに開いているGmailのタブを探す
    chrome.tabs.query({}, function (tabs) {
      let gmailTab = tabs.find(tab => tab.url && tab.url.startsWith(gmailUrl));

      if (gmailTab) {
        // Gmailタブが見つかった場合、そのタブに切り替える
        chrome.tabs.update(gmailTab.id, { active: true });
      } else {
        // Gmailタブが見つからなかった場合、新しいタブでGmailを開く
        chrome.tabs.create({ url: gmailUrl });
      }
    });
  }
  if (command === "open-calender") {
    const gmailUrl = "https://calendar.google.com/calendar/u/0/r";

    // すでに開いているCalenderのタブを探す
    chrome.tabs.query({}, function (tabs) {
      let gmailTab = tabs.find(tab => tab.url && tab.url.startsWith(gmailUrl));

      if (gmailTab) {
        // Calenderタブが見つかった場合、そのタブに切り替える
        chrome.tabs.update(gmailTab.id, { active: true });
      } else {
        // Calenderタブが見つからなかった場合、新しいタブでCalenderを開く
        chrome.tabs.create({ url: gmailUrl });
      }
    });
  }
  if (command === "open-youtube") {
    const gmailUrl = "https://www.youtube.com/";

    // すでに開いているYoutubeのタブを探す
    chrome.tabs.query({}, function (tabs) {
      let gmailTab = tabs.find(tab => tab.url && tab.url.startsWith(gmailUrl));

      if (gmailTab) {
        // Youtubeタブが見つかった場合、そのタブに切り替える
        chrome.tabs.update(gmailTab.id, { active: true });
      } else {
        // Youtubeタブが見つからなかった場合、新しいタブでGmailを開く
        chrome.tabs.create({ url: gmailUrl });
      }
    });
  }
});
