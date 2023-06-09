import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'

export type Channels = 'ipc-get-apps' | 'ipc-example'

const electronHandler = {
  getApps: (...args: []) => ipcRenderer.invoke('event:getApps', ...args),
  getScreens: (...args: []) => ipcRenderer.invoke('event:getScreens', ...args),
  openApp: (...args: []) => ipcRenderer.invoke('event:openApp', ...args),
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args)
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args)
      ipcRenderer.on(channel, subscription)

      return () => {
        ipcRenderer.removeListener(channel, subscription)
      }
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args))
    },
  },
}

contextBridge.exposeInMainWorld('electron', electronHandler)

export type ElectronHandler = typeof electronHandler
