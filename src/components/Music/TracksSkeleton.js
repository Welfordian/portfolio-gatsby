import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faUserMusic} from "@fortawesome/pro-solid-svg-icons";

export default class TracksSkeleton extends React.Component {
    render () {
        return (
            <div className="flex flex-wrap justify-between gap-2">
                {
                    new Array(this.props.count).fill(null).map((track) => {
                        return (
                            <div className="relative w-full h-[250px] md:w-[287px]" target="_blank" rel="noopener">
                                <div className="bg-gray-400 flex flex-col justify-between text-white w-full h-[250px] md:w-[287px]">
                                    <div className="font-bold text-xl px-4 py-3 text-center bg-black/[0.6]">
                                        <p className={`h-5 bg-gray-500 animate-pulse-fast`}>&nbsp;</p>
                                    </div>

                                    <div className="flex flex-col px-4 py-3 bg-black/[0.6]">
                                        <p className="font-semibold flex h-3">
                                            <FontAwesomeIcon className="mr-3" icon={faUserMusic} />
                                            <p className={`w-2/3 h-3 bg-gray-500 animate-pulse-fast`}>&nbsp;</p>
                                        </p>
                                        
                                        <p className="mt-3 font-semibold flex h-3 mt-6 mb-1">
                                            <FontAwesomeIcon className="mr-4" icon={faClock} />
                                            <p className={`w-1/2 h-3 bg-gray-500 animate-pulse-fast`}>&nbsp;</p>
                                        </p>
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