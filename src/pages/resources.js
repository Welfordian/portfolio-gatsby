import React from "react";
import axios from "axios";
import "react-activity/dist/Levels.css";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import ResourcesContainer from "../components/Resources/ResourcesContainer";
import ResourcesSkeleton from "../components/Resources/ResourcesSkeleton";
import SocialLinks from "../components/SocialLinks";

class Resources extends React.Component {
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
                
                <p className="text-4xl mt-24">Resources</p>

                {
                    Object.keys(this.props.bookmarks).length
                        ? <ResourcesContainer resources={this.props.bookmarks}></ResourcesContainer>
                        : <div className="flex justify-center mt-16">
                            <ResourcesSkeleton
                                count={15}
                            ></ResourcesSkeleton>
                        </div>
                }
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