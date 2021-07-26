import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import PlayButton from "./PlayButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import VolumeSlider from "./VolumeSlider";
import ShuffleButton from "./ShuffleButton";
import RepeatButton from "./RepeatButton";

class PlayerControls extends React.Component {
    render () {
        return (
            <div>
                <ShuffleButton player={this.props.player} playerState={this.props.playerState} />
                <PreviousButton player={this.props.player} playerState={this.props.playerState} />
                <PlayButton player={this.props.player} playerState={this.props.playerState} />
                <NextButton player={this.props.player} playerState={this.props.playerState} />
                <RepeatButton player={this.props.player} playerState={this.props.playerState} />
                <VolumeSlider player={this.props.player} playerState={this.props.playerState} />
            </div>
        )
    }
}

export default PlayerControls;