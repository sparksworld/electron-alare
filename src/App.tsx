import React from 'react'

export default () => {
  console.log(window.electron)
  return (
    <div className="page">
      <img className="logo" src={require('./assets/logo.png')} alt="" />
    </div>
  )
}
