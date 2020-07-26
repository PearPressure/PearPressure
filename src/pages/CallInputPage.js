import 'Css/App.css'
import React, { Component, useState, useEffect } from 'react';
import { ipcRenderer } from 'electron'

const auth = 'Bearer 44b40a95595ee9a1b106706e6e4dede27b4d0a06eb091eedd2d5240ee722a263';
let roomUrl = '';

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
        else {
            setNameMonitor("false");
        }
        var options = {
            method: "POST",
            url: 'https://api.daily.co/v1/rooms',
            headers: {
                'content-type': 'application/json',
                authorization: auth
            }
        };
        request(options, callback);
        function callback(error, response, body) {
            if (error) throw new Error(error);
            //console.log(body);
            var bodyParsed = JSON.parse(body);
            roomUrl = bodyParsed.url;
            //roomName = bodyParsed.data[0].name;
        }
        /*const roomName = () => {
            return roomUrl;
        };
        console.log(module);
        module.exports.log = 'hello world';*/
        //console.log(roomName);
        /*console.log(getRequest);
        console.log(getRequest.host);
        console.log(getRequest.response);
        console.log(getRequest.body);
        console.log(getRequest.agent);*/
        //var data = JSON.parse(getRequest.response.body.data);
        /*var theURL = '';
        //console.log(data);
        for (var i = 0; i < 1; i++) {
            theURL = 'https://api.daily.co/v1/rooms/' + roomName;
            options = {
                method: "DELETE",
                url: theURL,
                headers: {
                    authorization: auth
                }
            };
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                var theResponse = JSON.parse(body);
                console.log(theResponse);
            });
        }*/
        ipcRenderer.send('asynchronous open Video', ('open call window', 'VideoPage'))
    }


    function result() {
        return (name) ? "true" : "false";
    }

    function render() {
        return (<button onClick={myOnClick}>boi: {nameMonitor} </button>)
    }
    return render()
}


class CallInputPage extends Component {

    render() {
        return (
            <div className="CallInputPage">
                <header className="CallInputPage-header">
                    <p>
                        Enter the name of your room
                    </p>
                </header>
                <Button />
            </div>
        );
    }
}

export default CallInputPage
