import React, { Component, ErrorInfo, ReactNode } from 'react'
import styles from './index.module.less'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  errorInfo?: string
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorInfo: `ComponentDidCatch: CurrentPath`,
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
    this.setState({
      hasError: true,
      errorInfo: `ComponentDidCatch: CurrentPath-${''} ErrorMessage-${
        error?.message || 'unknown error'
      }`,
    })
  }

  public render() {
    const { errorInfo, hasError } = this.state

    if (hasError) {
      return (
        <div className={styles.error}>
          <div className={styles.errorWrap}>
            <h1 className={styles.title}>{'发生了一些错误'}</h1>
            <button onClick={() => window?.location?.reload()}>
              {/* <Trans>components.error_boundary.title</Trans> */}
              刷新
            </button>
            {errorInfo ? <h6 className={styles.info}>{errorInfo}</h6> : ''}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
