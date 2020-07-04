import React from 'react';
import DailyIframe from '@daily-co/daily-js';



class VideoCallFrame extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.url) {
            console.error('please set REACT_APP_DAILY_ROOM_URL env variable!');
            return;
        }
        this.daily = DailyIframe.createFrame({
            showLeaveButton: true,
            iframeStyle: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }
        });
        this.daily.join({ url: this.props.url, });
        /*this.daily = DailyIframe.wrap(this.iframeRef.current);
        console.log("dats it bois")
        this.daily.join({ url: this.props.url, });*/

    }

    /*constructor(props) {
        super(props);
        console.log("dats it bois")
        this.iframeRef = React.createRef();
    }

    componentDidMount() {
        if (!this.props.url) {
            console.error('please set REACT_APP_DAILY_ROOM_URL env variable!');
            return;
        }
        console.log("dats it bois")
        this.daily = window.DailyIframe.createFrame({
            showLeaveButton: true,
            iframeStyle: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }
        });
        this.daily.join({ url: this.props.url, });
    }*/

    render() {
        return <iframe className="Video-Frame"
            title="video call iframe"
            ref={this.daily}
            allow="camera; microphone; fullscreen"
        ></iframe>
    }
}

export default VideoCallFrame;

