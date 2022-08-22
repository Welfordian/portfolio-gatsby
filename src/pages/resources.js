import React from "react";
import axios from "axios";
import "react-activity/dist/Levels.css";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import ResourcesContainer from "../components/Resources/ResourcesContainer";
import ResourcesSkeleton from "../components/Resources/ResourcesSkeleton";
import SocialLinks from "../components/SocialLinks";
import Modal from "../components/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/pro-solid-svg-icons";

class Resources extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
        }
        
        this.modalButtons = <button className="bg-black text-white px-3 py-4 w-36" onClick={() => this.setState({modalOpen: false})}>Close</button>
    }

    componentDidMount() {
        const {bookmarks} = this.props;
        const {bookmarksLoaded} = this.props;

        if (! bookmarks.length) {
            axios.get('https://resources.josh.workers.dev/').then((r) => {
                bookmarksLoaded(r.data);
            });
        }
    }

    render () {
        return (
            <>
                <SocialLinks />
                
                <p className="text-4xl mt-24 flex items-center gap-2 dark:text-gray-300">
                    <FontAwesomeIcon className={`cursor-pointer`} icon={faQuestionCircle} onClick={() => { this.setState({ modalOpen: true })}}></FontAwesomeIcon>
                    Resources
                </p>

                {
                    Object.keys(this.props.bookmarks).length
                        ? <ResourcesContainer resources={this.props.bookmarks}></ResourcesContainer>
                        : <div className="flex justify-center mt-16">
                            <ResourcesSkeleton
                                count={15}
                            ></ResourcesSkeleton>
                        </div>
                }

                <Modal title="How does this page work?" open={this.state.modalOpen} buttons={[this.modalButtons]}>
                    <div className={`text-white`}>
                        <p>
                            Instead of creating a UI for this page, the resources are tied directly to my browser bookmarks.
                            I created a Chromium extension that, when a bookmark is added to a specific folder,
                            a POST request is made to an API on my server. The extension also makes requests when
                            a bookmark in that folder is updated or deleted. The API then scrapes the page
                            for Open Graph tags to display the data on this page. The images are then stored in
                            Cloudflare, resized and converted to WebP format.
                        </p>
                    </div>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = ({bookmarks}) => {
    return { bookmarks }
}
const mapDispatchToProps = dispatch => {
    return { bookmarksLoaded: (bookmarks) => dispatch({ type: `BOOKMARKS_LOADED`, bookmarks }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resources);