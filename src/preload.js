import {ipcRenderer} from  'electron'

function init() {
    // add global variables to your web page
    window.isElectron = true
    window.openMainNotepad = () => {
      ipcRenderer.send('openMainNote');
    }
}
init();