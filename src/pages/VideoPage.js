// JavaScript source code
import 'Css/App.css'
import React, { useState, useEffect } from 'react';
import VideoCallFrame from 'Pages/VideoCallFrame.js'
import DailyIframe from "@daily-co/daily-js"

//const user = require('./CallInputPage.js');
//console.log(user);
let url = 'https://pearpressure.daily.co/test-call';

function Button() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(false);
    const [nameMonitor, setNameMonitor] = useState("false");


    // ComponentDidMount
    useEffect(function myEffect() {
        console.log("hi");
    }, []);


    function myOnClick() {
        
    }


    function result() {
        return (name) ? "true" : "false";
    }

    function render() {
        return (<button onClick={myOnClick}>boi: {nameMonitor} </button>)
    }
    return render()
}



class VideoPage extends React.Component {
    render() {
        return (
            <div className="VideoPage">

                <VideoCallFrame
                    url={url}
                ></VideoCallFrame>

            </div>


        );
    }
}

export default VideoPage;
