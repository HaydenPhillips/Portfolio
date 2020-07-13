import React, { Component, createRef } from 'react'
import ReactPlayer from 'react-player'
import '../CSS/ResponsivePlayer.css'
// import swinging_tag from "../assets/videos/swinging_tag.mp4";

class ResponsivePlayer extends Component {

    render() {
        return (
            <div className="player-wrapper">
                <ReactPlayer
                    className="react-player"
                    url="https://fast.wistia.net/embed/iframe/kycto5ttr2?videoFoam=true"
                    width="100%"
                    height="100%"
                />
            </div>
        )
    }
}

export default ResponsivePlayer