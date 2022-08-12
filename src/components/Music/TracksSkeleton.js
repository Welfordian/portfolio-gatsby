import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faUserMusic} from "@fortawesome/pro-solid-svg-icons";

export default class TracksSkeleton extends React.Component {
    render () {
        return (
            <div className="flex flex-wrap justify-between pt-5 mt-7">
                {
                    new Array(this.props.count).fill(null).map((track) => {
                        return (
                            <div className="relative w-full h-[450px] md:w-[450px] mb-5" target="_blank" rel="noopener">
                                <div className="bg-gray-400 flex flex-col justify-between text-white w-full h-[450px] md:w-[450px]">
                                    <div className="font-bold text-xl px-4 py-6 text-center bg-black/[0.6]">
                                        <p className={`h-6 bg-gray-500 animate-pulse-fast`}>&nbsp;</p>
                                    </div>

                                    <div className="flex flex-col px-4 py-6 bg-black/[0.6]">
                                        <p className="font-semibold flex h-6">
                                            <FontAwesomeIcon className="mr-3" icon={faUserMusic} />
                                            <p className={`w-1/2 h-5 bg-gray-500 animate-pulse-fast`}>&nbsp;</p>
                                        </p>
                                        {
                                            <p className="mt-3 font-semibold flex h-5">
                                                <FontAwesomeIcon className="mr-4" icon={faClock} />
                                                <p className={`w-1/2 h-5 bg-gray-500 animate-pulse-fast`}>&nbsp;</p>
                                            </p>
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}