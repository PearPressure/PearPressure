import 'Css/App.css'
import React, { Component } from 'react'
import VideoCallFrame from 'Pages/VideoCallFrame.js';

class App extends Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <p>
                      Edit <code>the shit</code> and save to reload.
        </p>
                  <VideoCallFrame
                      url={'https://pearpressure.daily.co/test-call'}
                  ></VideoCallFrame>

              </header>
          </div>
      );
  }
}

export default App
