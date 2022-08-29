import React from 'react'
import Modal from "./Modal";

class YoutubeLinkConfirmation extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            modalOpen: false,
            preventClick: true,
        }
        
        this.children = React.createRef();
        
        this.buttons = [
            <button className="bg-black text-white px-3 py-4" onClick={() => this.continueToVideo()}>Continue to video</button>,
            <button className="bg-black text-white px-3 py-4" onClick={() => this.setState({modalOpen: false})}>Cancel</button>
        ]
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
            this.setState({
                preventClick: true,
                modalOpen: false,
            })
        })
    }

    render() {
        return (
            <div ref={this.children}>
                { this.props.children }

                <Modal title="Disclaimer" open={this.state.modalOpen} buttons={this.buttons}>
                    <p>
                        The URLs for the YouTube videos are generated automatically via the YouTube Search API.
                        While this is usually pretty accurate, the URLs for these videos aren't manually verified and may not be the intended video.
                    </p>
                </Modal>
            </div>
        );
    }
}

export default YoutubeLinkConfirmation