import React from "react";

export default class ResourcesSkeleton extends React.Component {
    render () {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-max -mt-4">
                {
                    new Array(this.props.count).fill(null).map((track) => {
                        return (
                            <a className="w-[524px] max-w-full cursor-pointer font-[Helvetica] block">
                                <div className="w-[524px] max-w-full cursor-pointer font-[Helvetica]">
                                    <div className="h-[274px] bg-gray-400 border-[1px] border-b-0 border-[#dadde1] bg-cover bg-center bg-no-repeat lazy"></div>
                                    <div className="break-words border-[2px] border-gray-700 bg-black px-[12px] py-[10px] antialiased">
                                        <div className="overflow-hidden truncate whitespace-nowrap text-[12px] uppercase leading-[11px] text-gray-500">
                                            <span className={`block w-2/5 bg-gray-500 animate-pulse-fast`}>&nbsp;</span>
                                        </div>
                                        <div
                                            className="block h-[46px] max-h-[46px] border-separate select-none overflow-hidden break-words text-left"
                                            style={{borderSpacing: '0px'}}>
                                            <div
                                                className="mt-[3px] truncate pt-[2px] text-[16px] font-semibold leading-[20px] text-gray-300">
                                                <span className={`block w-3/5 bg-gray-500 animate-pulse-fast`}>&nbsp;</span>
                                            </div>
                                            <div className="mt-[3px] block h-[18px] max-h-[80px] border-separate select-none overflow-hidden truncate whitespace-nowrap break-words text-left text-[14px] leading-[20px] text-gray-400">
                                                <span className={`block w-full bg-gray-500 animate-pulse-fast`}>&nbsp;</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })
                }
            </div>
        );
    }
}