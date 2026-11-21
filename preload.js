
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('appInfo', {
    getName: () => 'Student Notes Sharing System'
});
