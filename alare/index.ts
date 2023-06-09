import {
  app,
  BrowserWindow,
  ipcMain,
  IpcMainInvokeEvent,
  screen,
} from 'electron'

import isDev from 'electron-is-dev'
import * as path from 'path'
import * as url from 'url'
import * as utils from '@alare/utils'

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
  return utils.getDir(path.resolve(process.cwd(), './apps'))
}

async function handleGetScreens() {
  return screen.getAllDisplays()
}

ipcMain.on('ipc-example', async (event, arg) => {
  // console.log(event, arg)
  event.reply('ipc-example', 'pong')
})

const createWindow = () => {
  const width = 1920
  const height = 1080
  const window = new BrowserWindow({
    fullscreen: JSON.parse(process.env.APP_IS_FULL),
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, './preloads/main-preload.js'),
      webSecurity: false,
    },
  })
  // path.join(__dirname, '../renderer/index.html')
  const main = isDev
    ? `http://localhost:3000`
    : url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true,
      })

  window.loadURL(main)
  isDev && window.webContents.openDevTools()
}

async function ceratAssignWindow(
  channel: IpcMainInvokeEvent,
  activeApp: any,
  activeScreen: any
) {
  const displays = screen.getAllDisplays()

  const display = displays.find((item) => {
    return item.id == activeScreen?.id
  })

  if (display) {
    const width = 1920
    const height = 1080
    const externalWindow = new BrowserWindow({
      fullscreen: JSON.parse(process.env.APPS_IS_FULL),
      width: width,
      height: height,
      x: display.bounds.x + display.bounds.width / 2 - width / 2,
      y: display.bounds.y + display.bounds.height / 2 - height / 2,
      webPreferences: {
        // preload: path.join(__dirname, './preloads/main-preload.js'),
        webSecurity: false,
        nodeIntegration: true,
        contextIsolation: false,
      },
    })

    externalWindow.loadURL(
      url.format({
        pathname: path.join(activeApp?.path, './index.html'),
        protocol: 'file:',
        slashes: true,
      })
    )

    isDev && externalWindow.webContents.openDevTools()
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // console.log(findViewDir())
  ipcMain.handle('event:getApps', handleGetApps)
  ipcMain.handle('event:getScreens', handleGetScreens)
  ipcMain.handle('event:openApp', ceratAssignWindow)

  // ipcMain.handle('event:selectApp', handleSelectApp)
  // const assignWindowID = process.env.ELECTRON_SCREEN_ID
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
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
