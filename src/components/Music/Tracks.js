import React from "react";
import Track from "./Track";

export default class Tracks extends React.Component {
    render () {
        return (
            <div className="flex flex-wrap justify-around pt-5">
                {
                    this.props.tracks.map((track) => {
                        return (
                            <Track track={track} />
                        );
                    })
                }
            </div>
        );
    }
}