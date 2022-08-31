import React from 'react'
import Modal from "./Modal";

class YoutubeLinkConfirmation extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalOpen: false,
            preventClick: true,
        }
        
        this.buttons = [
            <button className="bg-black text-white px-3 py-4" onClick={() => this.continueToVideo()}>Continue to video</button>,
            <button className="bg-black text-white px-3 py-4" onClick={() => this.setState({modalOpen: false})}>Cancel</button>
        ]
        
        this.children = React.createRef();
    }
    
    componentDidMount() {
        let link = this.children.current.querySelector('a');
        
        link.addEventListener('click', e => {
            if (this.state.preventClick) {
                e.preventDefault();

                this.setState({
                    modalOpen: true,
                })
            }
        })
    }
    
    continueToVideo() {
        let link = this.children.current.querySelector('a');
        
        this.setState({
            preventClick: false,
        }, () => {
            link.click();
            
            this.props.onContinue();
            
            this.setState({
                preventClick: true,
                modalOpen: false,
            })
        })
    }

    render() {
        if (this.props.href === '#now_playing') {
            this.buttons = [
                <button className="bg-black text-white px-3 py-4" onClick={() => this.setState({modalOpen: false})}>Close</button>
            ]
        }
        
        return (
            <div ref={this.children}>
                { this.props.children }

                <Modal title={this.props.href !== '#now_playing' ? 'Disclaimer' : 'Oh, no!'} open={this.state.modalOpen} buttons={this.buttons}>
                    <p>
                        {
                            this.props.href !== '#now_playing'
                            ?
                                <span>
                                    The URLs for the YouTube videos are generated automatically via the YouTube Search API.
                                    While this is usually pretty accurate, the URLs for these videos aren't manually verified and may not be the intended video.
                                </span>
                            :
                                <span>
                                    The YouTube URL for this Spotify track hasn't been generated yet.
                                    The URLs for tracks are only imported once the song finishes. Sorry!
                                </span>    
                        }
                    </p>
                </Modal>
            </div>
        );
    }
}

export default YoutubeLinkConfirmation