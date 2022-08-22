import React from 'react';
import { Levels } from "react-activity";
import "react-activity/dist/Levels.css";
import moment from "moment";

class Playlist extends React.Component {
    render() {
        console.log(this.props.playlist[0]);
        return (
            <div className={`overflow-auto col-span-4 md:col-span-2 lg:col-span-1`}>
                <div className={`flex-grow h-full overflow-auto flex flex-col gap-2`}>
                    {
                        this.props.playlist.map((track, index) => {
                            return (
                                <div className={`flex gap-2 border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer`} onClick={() => this.props.onChange(index)}>
                                    <div>
                                        <div className={`relative`} style={{width: '164px'}}>
                                            {
                                                this.props.currentVideoIndex === index 
                                                    ? 
                                                        <div className={`absolute inset-0 flex justify-center items-center text-white bg-black/60`}>
                                                            <Levels size={40} speed={0.5}/>
                                                        </div>
                                                    : ""
                                            }
                                            
                                            <img className={`w-full`} src={track.snippet.thumbnails.high.url} />

                                            <p className={`absolute bottom-0 right-0 px-1 text-sm mr-1 mb-1 text-white bg-black/70`} dangerouslySetInnerHTML={{ __html: track.duration_raw }}></p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div className={`flex flex-col`}>
                                                <p dangerouslySetInnerHTML={{ __html: track.title }}></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Playlist