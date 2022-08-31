import React from 'react';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Levels} from "react-activity";
import Marquee from "react-fast-marquee";
import DetectableOverflow from "react-detectable-overflow";
import {faTimes} from "@fortawesome/pro-light-svg-icons";
import {Popover} from "react-tiny-popover";
import Track from "./Music/Track";

class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            track: null,
            isClosed: false,
            isOverflowed: false,
            popoverOpen: false,
        }

        this.explicit = <div className={`bg-gray-700 shadow-md text-white px-2 py-1`}>Explicit</div>
    }

    componentDidMount() {
        this.loadTrack();
    }
    
    loadTrackTimeout(ms = 5000) {
        setTimeout(() => { this.loadTrack() }, ms);
    }
    
    loadTrack() {
        axios.get('https://api.welford.me/spotify/now').then((r) => {
            this.setState({
                track: r.data,
                isOverflowed: false,
            })
            
            if (r.data.is_playing) {
                this.loadTrackTimeout()
            } else {
                this.loadTrackTimeout();
            }
        }).catch(() => {
            this.loadTrackTimeout(5000);
        });
    }
    
    close(e) {
        e.preventDefault();
        
        this.setState({
            isClosed: true
        })
    }
    
    render() {
        if (this.state.isClosed || this.state.track === null || this.state.track.item === null || this.state.track.length === 0) return (<div></div>)
        
        let image = this.state.track?.item?.album?.images[0];
        
        return (
            <Track track={this.state.track.item}></Track>
            // <div className={`w-full md:w-auto fixed bottom-0 left-0 self-center flex w-full justify-center md:justify-start z-10 md:ml-[7.25em]`}>
            //     <div className={`bg-black/80 px-4 py-3 mb-3 ml-3 mr-3 drop-shadow-[0_8px_5px_rgba(0,0,0,0.10)]`}>
            //         <a href={this.state.track.item.external_urls.spotify} target={`_blank`} rel={`noopener`}>
            //             <div className="flex items-end w-full relative">
            //                 <FontAwesomeIcon onClick={e => this.close(e)} className={`absolute -top-3 -right-4 text-white px-2 py-1`} icon={faTimes} />
            //                
            //                 <div className="inline-flex items-center w-full">
            //                     <Levels size={20} color={`white`} className={`mr-4 w-5`}></Levels>
            //
            //                     <div className={`flex items-center gap-3`}>
            //                         <img className="w-16 self-center" alt={`Album art for ${this.state.track.item.name} by ${this.state.track.item.artists[0]['name']}`} src={image.url} />
            //
            //                         <div className="text-white max-w-full flex flex-col justify-between">
            //                             <div className={`max-w-xs`}>
            //                                 {
            //                                     this.state.isOverflowed
            //                                         ?
            //                                         <Marquee className={`max-w-xs`} gradient={false} speed={30} play={this.state.playMarquee}>{this.state.track.item.name}</Marquee>
            //                                         :
            //                                         <DetectableOverflow onChange={isOverflowed => this.setState({ isOverflowed })}>
            //                                             <p className="break-words">{this.state.track.item.name}</p>
            //                                         </DetectableOverflow>
            //                                 }
            //                             </div>
            //                             <p>
            //                                 {
            //                                     this.state.track.item.explicit
            //                                         ?
            //                                         <div className={`bg-gray-700 px-1 mr-2 inline`} title={`Explicit`} onMouseEnter={() => this.setState({popoverOpen: true})} onMouseLeave={() => this.setState({popoverOpen: false})}>
            //                                             <Popover
            //                                                 containerClassName={`z-50`}
            //                                                 isOpen={this.state.popoverOpen}
            //                                                 content={this.explicit}
            //                                             >
            //                                                 <p className={`inline p-0 m-0`}>E</p>
            //                                             </Popover>
            //                                         </div>
            //                                         : <span></span>
            //                                 }
            //                                 {this.state.track.item.artists[0]['name']}
            //                             </p>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </a>
            //     </div>
            // </div>
        );
    }
}

export default NowPlaying