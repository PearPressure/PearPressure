// JavaScript source code
import 'Css/App.css'
import React from 'react';
import VideoCallFrame from 'Pages/VideoCallFrame.js'
import { render } from 'react-dom'

class VideoPage extends React.Component {
    render() {
        return (
            <div className="VideoPage">
                <header className= "App-header">
                SUP
                </header>
            <VideoCallFrame
                url={'https://pearpressure.daily.co/test-call'}
                ></VideoCallFrame>
                </div>
        );
    }
}

export default VideoPage;

let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)
render(<VideoPage />, document.getElementById('root'))
