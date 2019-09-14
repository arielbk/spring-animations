import { render } from 'react-dom'
import React from 'react'
import App from './App'
import './index.css';

function Index() {
  return <App />
}

render(<Index />, document.getElementById('root'))