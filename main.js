const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// 字体扫描函数 - 使用 font-list 包
async function getFontList() {
  try {
    const fontList = require('font-list');
    const fonts = await fontList.getFonts();
    // font-list 返回格式如 ["Arial", "Arial Black", ...]，去前缀后排序
    return fonts
      .map(f => f.replace(/^"/, '').replace(/"$/, ''))
      .sort((a, b) => a.localeCompare(b, 'zh-CN'));
  } catch (e) {
    console.error('字体扫描失败:', e);
    return [];
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    title: 'Font Bitmap Extractor',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile('Font Bitmap Extractor.html');
  // 开发时取消注释打开 DevTools
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  // 注册 IPC 处理器 - 渲染进程请求字体列表
  ipcMain.handle('get-fonts', async () => {
    return await getFontList();
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
