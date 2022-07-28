import React from "react";

export default class Resource extends React.Component {
    getHostname(url) {
        let tmpElement = document.createElement('a');
            tmpElement.href = url;
            
        return tmpElement.hostname.replace('www.', '');    
    }
    
    render () {
        return (
            <a className="w-[524px] max-w-full cursor-pointer font-[Helvetica] block" target="_blank" rel="noopener" href={this.props.resource.url}>
                <div className="w-[524px] max-w-full cursor-pointer font-[Helvetica]">
                    <div className="h-[274px] border-[1px] border-b-0 border-[#dadde1] bg-cover bg-center bg-no-repeat"
                         style={{backgroundImage: `url("${this.props.resource.openGraph.image ?? 'https://via.placeholder.com/525x275.png?text=NO%20IMAGE'}")`}}></div>
                    <div className="break-words border-[2px] border-gray-700 bg-black px-[12px] py-[10px] antialiased">
                        <div className="overflow-hidden truncate whitespace-nowrap text-[12px] uppercase leading-[11px] text-gray-500">
                            {this.getHostname(this.props.resource.url)}
                        </div>
                        <div
                            className="block h-[46px] max-h-[46px] border-separate select-none overflow-hidden break-words text-left"
                            style={{borderSpacing: '0px'}}>
                            <div
                                className="mt-[3px] truncate pt-[2px] text-[16px] font-semibold leading-[20px] text-gray-300">
                                {this.props.resource.openGraph.title}
                            </div>
                            <div className="mt-[3px] block h-[18px] max-h-[80px] border-separate select-none overflow-hidden truncate whitespace-nowrap break-words text-left text-[14px] leading-[20px] text-gray-400">
                                {this.props.resource.openGraph.description}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}