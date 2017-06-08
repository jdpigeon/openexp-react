import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// // this is for importing the npm client registry
var RegClient = require('npm-registry-client')
var client = new RegClient(config)
var uri = "https://registry.npmjs.org/npm"
var params = {timeout: 1000}

ReactDOM.render(
  <App />, document.getElementById('root')
)
