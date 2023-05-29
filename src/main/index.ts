import { app, BrowserWindow, dialog, ipcMain, screen } from 'electron'
import * as path from 'path'
import { getDir } from '../utils'
// import fs from 'fs'

// ipcMain.on('ipc-example', async (event, arg) => {
//   const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`
//   console.log(msgTemplate(arg))
//   event.reply('ipc-example', msgTemplate('pong'))
// })

// function findApps() {
//   const dir_path = path.join(process.cwd(), './apps')
//   const items = fs.readdirSync(dir_path)

//   return items.filter((item) => {
//     return fs.statSync(path.join(dir_path, item)).isDirectory()
//   })
// }
async function handleGetApps() {
  return getDir(path.resolve(process.cwd(), './apps'))
}

async function handleSelectApp(event: Electron.IpcMainInvokeEvent, ...args: any[]) {
  
  
}

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
      fullscreen: false,
      width: width,
      height: height,
      x: display.bounds.x + display.bounds.width / 2 - width / 2,
      y: display.bounds.y + display.bounds.height / 2 - height / 2,
      webPreferences: {
        preload: path.join(__dirname, './preload.js'),
      },
    })

    externalWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
    externalWindow.webContents.openDevTools()
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // console.log(findViewDir())
  ipcMain.handle('event:getApps', handleGetApps)
  ipcMain.handle('event:selectApp', handleSelectApp)
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
