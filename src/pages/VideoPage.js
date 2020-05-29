// JavaScript source code
import 'Css/App.css'
import React from 'react';
import VideoCallFrame from 'Pages/VideoCallFrame.js'

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
