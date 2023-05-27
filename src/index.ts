import { app, BrowserWindow, screen } from 'electron'
import * as path from 'path'



console.log(process.env.AAAA);

function ceratAssignWindow(id?: string) {
  let display
  const displays = screen.getAllDisplays()
  if (id) {
    display = displays.find((item) => {
      return item.id == Number(id)
    })
  } else {
    display = displays[0]
  }

  if (display) {
    const width = 800
    const height = 800
    const externalWindow = new BrowserWindow({
      fullscreen: true,
      width: width,
      height: height,
      x: display.bounds.x + display.bounds.width / 2 - width / 2,
      y: display.bounds.y + display.bounds.height / 2 - height / 2,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    })
    externalWindow.loadFile(path.join(__dirname, '../index.html'))
    externalWindow.webContents.openDevTools()
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  const assignWindowID = process.env.ELECTRON_SCREEN_ID
  ceratAssignWindow(assignWindowID)

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) ceratAssignWindow(assignWindowID)
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
