import React from 'react'
import { render } from 'react-dom'
import App from 'Components/App'
import VideoPage from 'Pages/VideoPage.js'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)
//const button = document.getElementById('Button')
//console.log(button);
// Now we can render our application into it
render(<App />, document.getElementById('root'))
//render(<VideoPage />, document.getElementById('root')
