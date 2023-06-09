import React, { useEffect } from 'react'
import ErrorBoundary from '@src/components/ErrorBoundary'
import Home from './Home'

const App = () => {
  useEffect(() => {
    window.electron?.ipcRenderer?.sendMessage('ipc-example', ['ping'])
  }, [])
  return (
    <div>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  )
}

export default App
