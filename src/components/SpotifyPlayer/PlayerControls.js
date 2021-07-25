import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay} from "@fortawesome/free-solid-svg-icons";
import PlayButton from "./PlayButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

class PlayerControls extends React.Component {
    render () {
        return (
            <div>
                <PreviousButton player={this.props.player} playerState={this.props.playerState} />
                <PlayButton player={this.props.player} playerState={this.props.playerState} />
                <NextButton player={this.props.player} playerState={this.props.playerState} />
            </div>
        )
    }
}

export default PlayerControls;