import 'Css/App.css'
import React, { Component, useState, useEffect } from 'react';
import { ipcRenderer } from 'electron'



function Button() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(false);
    const [nameMonitor, setNameMonitor] = useState("false");


    // ComponentDidMount
    useEffect(function myEffect() {
        console.log("hi");
    }, []);

    function myOnClick() {
        setName(!name);
        if (nameMonitor == "false")
            setNameMonitor("true");
        else
            setNameMonitor("false");
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
