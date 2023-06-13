import React, { useEffect } from 'react'
import ErrorBoundary from '@src/components/ErrorBoundary'
import Home from './Home/index'

const App = () => {
  useEffect(() => {
    window.electron?.ipcRenderer?.sendMessage('ipc-example', ['ping'])
  }, [])
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  )
}

export default App
