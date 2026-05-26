const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronFonts', {
  // 获取系统全部已安装字体列表
  getFonts: () => ipcRenderer.invoke('get-fonts'),

  // 检查是否在 Electron 环境中
  isElectron: true
});
