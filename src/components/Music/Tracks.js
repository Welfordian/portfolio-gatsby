import React from "react";
import Track from "./Track";

export default class Tracks extends React.Component {
    render () {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-max mt-12">
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