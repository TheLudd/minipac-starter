import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

window.onload = function () {
  ReactDom.render(<App />, document.getElementById('main'))
}
