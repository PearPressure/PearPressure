// JavaScript source code
import 'Css/App.css'
import React, { useState, useEffect } from 'react';
import VideoCallFrame from 'Pages/VideoCallFrame.js'
import DailyIframe from "@daily-co/daily-js"


let roomName = "https://pearpressure.daily.co/DRvskFeilid51C5hEf2C";


function Button() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(false);
    const [nameMonitor, setNameMonitor] = useState("false");


    // ComponentDidMount
    useEffect(function myEffect() {
        console.log("hi");
    }, []);


    function myOnClick() {
        var request = require("request");
        setName(!name);
        if (nameMonitor == "false") {

            setNameMonitor("true");
        }
        else
        {
            setNameMonitor("false");
        }
        var options = {
            method: "GET",
            url: 'https://api.daily.co/v1/rooms',
            headers: {
                authorization: 'Bearer 44b40a95595ee9a1b106706e6e4dede27b4d0a06eb091eedd2d5240ee722a263'
            }
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body);
            var bodyParsed = JSON.parse(body);
            console.log(bodyParsed);
            roomName = bodyParsed.data[0].url;
        });
        console.log(roomName);

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
                <header className="App-header">
                    SUP
               </header>
                <Button />
                <VideoCallFrame
                    url={roomName}
                ></VideoCallFrame>

            </div>


        );
    }
}

export default VideoPage;
