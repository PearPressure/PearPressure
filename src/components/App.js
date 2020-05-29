import 'Css/App.css'
import React, { Component, useState, useEffect } from 'react'
import VideoCallFrame from 'Pages/VideoCallFrame.js'
import VideoPage from 'Pages/VideoPage.js'
//import logo from 'Documents/images/Logo/logo.svg';
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
    }


    function result() {
        return (name) ? "true" : "false";
    }

    function render() {
        return (<button onClick={myOnClick}>boi: {nameMonitor} </button>)
    }
    return render()
}

class App extends Component {

    render() {
      return (
          <div className="App">
              <header className="App-header">
                  <p>
                      Edit <code>the shit</code> and save to reload.
                  </p>
              </header>
                  whatttttttttttttt
              <Button />
          </div>
      );
  }
}

export default App
