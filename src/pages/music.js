import React from "react";
import axios from "axios";
import { Levels } from "react-activity";
import "react-activity/dist/Levels.css";
import Tracks from "../components/Music/Tracks";
import Layout from "../components/Layout";

export default class Music extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        }
    }

    componentDidMount() {
        axios.get('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=welfordian&api_key=cd1a599104643eed3f309d8376b4740d&format=json&limit=23').then((r) => {
            this.setState({ tracks: r.data.recenttracks.track});
        })
    }

    render () {
        return (
            <Layout>
                <p className="text-4xl mt-24">Recently Played</p>

                {
                    this.state.tracks.length
                        ? <Tracks tracks={this.state.tracks} />
                        : <div className="flex justify-center mt-16">
                            <Levels
                                size={50}
                                speed={0.5}/>
                        </div>
                }
            </Layout>
        );
    }
}