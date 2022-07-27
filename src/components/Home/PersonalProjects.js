import React from "react";
import PersonalProject from "./PersonalProject";

export default class PersonalProjects extends React.Component {
    render () {
        return (
            <div>
                <p className="text-4xl mt-24">Personal Projects</p>

                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max mt-12">
                    <PersonalProject
                        bordered
                        title="Welfred"
                        description="Welfred is an Alfred clone written purely in NodeJS. I began development on this app in early 2021 in order to improve my skill-set. I wouldn't recommend using it over Alfred but it was quite an intriguing project to work on. "
                        tag="NodeJS"
                        to="https://github.com/welfordian/welfred"
                    ></PersonalProject>

                    <PersonalProject
                        title="Spotify Player"
                        description="Spotify Player was built using React & the Spotify Web SDK. It utilizes the Spotify Connect functionality to enable playback directly through the web whilst also allowing control through the mobile & desktop app."
                        tag="React"
                        to="https://welford.me/spotify-player"
                    ></PersonalProject>

                    <PersonalProject
                        bordered
                        title="YouTube App"
                        description="I made a YouTube app written in NodeJS to convert Spotify playlists into a YouTube queue. This, unfortunately, no longer works due to Spotify removing app URI's. I will likely revisit this project in the near future."
                        tag="NodeJS"
                        to="https://github.com/welfordian/youtube-app"
                    ></PersonalProject>
                </div>
            </div>
        )
    }
}