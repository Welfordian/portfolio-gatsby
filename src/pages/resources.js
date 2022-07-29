import React from "react";
import axios from "axios";
import { Levels } from "react-activity";
import "react-activity/dist/Levels.css";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import ResourcesContainer from "../components/Resources/ResourcesContainer";
import {Helmet} from "react-helmet";

class Resources extends React.Component {
    componentDidMount() {
        const {bookmarks} = this.props;
        const {bookmarksLoaded} = this.props;

        if (! bookmarks.length) {
            axios.get('https://api.welford.me/v1/bookmarks').then((r) => {
                bookmarksLoaded(r.data.bookmarks);
            });
        }
    }

    render () {
        return (
            <Layout>
                <p className="text-4xl mt-24">Resources</p>

                {
                    Object.keys(this.props.bookmarks).length
                        ? <ResourcesContainer resources={this.props.bookmarks}></ResourcesContainer>
                        : <div className="flex justify-center mt-16">
                            <Levels size={50} speed={0.5}/>
                        </div>
                }
            </Layout>
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