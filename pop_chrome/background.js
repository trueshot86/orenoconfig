chrome.commands.onCommand.addListener((command) => {
  if (command === "move-tab") {
    moveTabToAnotherWindow();
  }
});

function moveTabToAnotherWindow() {
  chrome.windows.getAll({populate: true}, (windows) => {
    if (windows.length < 2) {
      // 別のウィンドウがない場合は新しいウィンドウを作成
      chrome.windows.create({type: 'normal'}, (newWindow) => {
        moveTab(newWindow.id);
      });
    } else {
      // 現在のウィンドウ以外の最初のウィンドウを選択
      const currentWindowId = windows.find(w => w.focused).id;
      const targetWindow = windows.find(w => w.id !== currentWindowId && w.type === 'normal');
      if (targetWindow) {
        moveTab(targetWindow.id);
      } else {
        console.log('適切な対象ウィンドウが見つかりません。');
      }
    }
  });
}

async function moveTab(targetWindowId) {
  try {
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if (tab) {
      await chrome.tabs.move(tab.id, {windowId: targetWindowId, index: -1});
    }
  } catch (error) {
    console.error('タブの移動中にエラーが発生しました:', error);
    // ここでユーザーにエラーメッセージを表示するなどの処理を追加できます
  }
}
