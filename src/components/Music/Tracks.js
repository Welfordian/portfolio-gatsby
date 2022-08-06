import React from "react";
import Track from "./Track";

export default class Tracks extends React.Component {
    render () {
        return (
            <div className="flex flex-wrap justify-between pt-5 mt-7">
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