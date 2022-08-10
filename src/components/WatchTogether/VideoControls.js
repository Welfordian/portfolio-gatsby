import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/pro-solid-svg-icons";
import Slider from "rc-slider";

class VideoControls extends React.Component {
    constructor() {
        super();
        
        this.state = {
            newPosition: 0,
        }
    }
    
    playVideo() {
        this.props.onPlay();
    }
    
    pauseVideo() {
        this.props.onPause();
    }
    
    afterChange() {
        if (this.props.isOwner) {
            this.setState({dragging: false});
            this.props.updateSeekPosition(this.state.newPosition);
        }
    }
    
    render () {
        return (
            <div className={`flex w-full bg-[#00000085] text-white p-4 gap-4 ${this.props.isOwner ? '-mt-[3.6rem]' : '-mt-[2.8rem]'} z-10 items-center`}>
                {
                    this.props.isOwner
                    ?
                        <>
                            {
                                this.props.playing
                                ?
                                    <h1 onClick={() => { this.pauseVideo() }}>
                                        <FontAwesomeIcon icon={faPause} />
                                    </h1>
                                :
                                    <h1 onClick={() => { this.playVideo() }}>
                                        <FontAwesomeIcon icon={faPlay} />
                                    </h1>    
                            }
                        </>
                    : ""    
                }

                <Slider
                    progress
                    min={0}
                    max={this.props.duration}
                    value={this.state.dragging ? this.state.newPosition : this.props.position}
                    onBeforeChange={() => { if (this.props.isOwner){ this.setState({dragging: true}) }}}
                    onChange={(position) => { if (this.props.isOwner) { this.setState({ newPosition: position }) } }}
                    onAfterChange={this.afterChange.bind(this)}
                    className={``}
                    trackStyle={{backgroundColor: 'white'}}
                    railStyle={{backgroundColor: 'gray'}}
                    handleStyle={{backgroundColor: 'white', border: 'none'}}
                />
            </div>
        )
    }
}

export default VideoControls