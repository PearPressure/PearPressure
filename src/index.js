import React from 'react'
import { render } from 'react-dom'
import App from 'Components/App'
import VideoPage from 'Pages/VideoPage.js'
const ipc = require('electron').ipcRenderer;
// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)
//const button = document.getElementById('Button')
//console.log(button);
// Now we can render our application into it
var home = true
ipc.on('Call start', (event, args) => {
    if (event === 'open call window')
        home = false;
    else
        home = true;
})
if(home)
    render(<App />, document.getElementById('root'))
else
    render(<VideoPage />, document.getElementById('root'))
//render(<VideoPage />, document.getElementById('root')