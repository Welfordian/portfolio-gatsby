import React from "react";
import Experiment from "./Experiment";

export default class Experiments extends React.Component {
    render () {
        return (
            <div>
                <p className="text-4xl mt-24">Experiments</p>

                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max mt-12">
                    <Experiment
                        title="Watch Together"
                        description="Watch Together allows multiple people to watch the same YouTube video. This experiment utilizes React & NodeJS."
                        tag="React, NodeJS"
                        to="https://welford.me/watch-together"
                    ></Experiment>

                    <Experiment
                        title="Terminal"
                        description="I (somewhat) replicated the Linux terminal using ReactJS & Tailwind. There's even an easter egg in there!"
                        tag="React, Tailwind"
                        to="https://welford.me/terminal"
                    ></Experiment>

                    <Experiment
                        title="Youtify"
                        description="Youtify is a small app that converts Spotify playlists into YouTube videos. Playlists can also be saved."
                        tag="React"
                        to="https://welford.me/youtify"
                    ></Experiment>
                </div>
            </div>
        )
    }
}