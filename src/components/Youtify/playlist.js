import React from 'react';
import { Levels } from "react-activity";
import "react-activity/dist/Levels.css";
import moment from "moment";

class Playlist extends React.Component {
    render() {
        return (
            <div className={`mt-12`}>
                <p className="text-4xl dark:text-gray-300">Playlist</p>

                <div>
                    <table className={`min-w-max w-full table-auto mt-12`}>
                        <thead className={`bg-gray-200 dark:bg-gray-500 dark:text-gray-300 text-gray-600 uppercase text-sm leading-normal`}>
                            <tr>
                                <th className={`py-6`}></th>
                                <th className={`text-left`}>Title</th>
                                <th className={`text-left`}>Album</th>
                                <th className={`text-left`}>Date Added</th>
                                <th className={`text-left`}>Duration</th>
                            </tr>
                        </thead>
                        <tbody className={`dark:text-gray-300 text-gray-600 text-sm font-light`}>
                        {
                            this.props.playlist.map((track, index) => {
                                return (
                                    <tr className={`border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer`} onClick={() => this.props.onChange(index)}>
                                        <td className={`pl-3 py-3`}>
                                            {
                                                this.props.currentVideoIndex === index ? <Levels size={40} speed={0.5}/> : <img className={`w-10`} src={track.track.album.images[0].url} />
                                            }
                                        </td>
                                        <td>
                                            <div className={`flex flex-col`}>
                                                <p dangerouslySetInnerHTML={{ __html: track.track.name }}></p>
                                                <p dangerouslySetInnerHTML={{ __html: track.track.name }}></p>
                                            </div>
                                        </td>
                                        <td>
                                            <p dangerouslySetInnerHTML={{ __html: track.track.album.name }}></p>
                                        </td>
                                        <td>
                                            <p dangerouslySetInnerHTML={{ __html: moment(track.added_at).fromNow() }}></p>
                                        </td>
                                        <td>
                                            <p dangerouslySetInnerHTML={{ __html: new Date(track.track.duration_ms).toISOString().slice(11,19) }}></p>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Playlist