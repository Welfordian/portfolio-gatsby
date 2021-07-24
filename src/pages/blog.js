import React from "react";
import axios from "axios";
import BlogPosts from "../components/Blog/BlogPosts";
import "react-activity/dist/Bounce.css";
import {Bounce} from "react-activity";
import Layout from "../components/Layout";
import {connect} from "react-redux";

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {posts} = this.props;
        const {blogPostsLoaded} = this.props;

        if (! posts.length) {
            axios.get('https://api.welford.me/v1/posts').then(r => {
                blogPostsLoaded(r.data)
            })
        }
    }

    render () {
        return (
            <Layout>
                <p className="text-4xl mt-24">Blog Posts</p>

                {
                    this.props.posts.length
                        ? <BlogPosts posts={this.props.posts} />
                        : <div className="flex justify-center mt-16">
                            <Bounce
                                size={50}
                                speed={0.5}/>
                        </div>
                }
            </Layout>
        );
    }
}

const mapStateToProps = ({posts}) => {
    return { posts }
}
const mapDispatchToProps = dispatch => {
    return { blogPostsLoaded: (posts) => dispatch({ type: `BLOG_POSTS_LOADED`, posts }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);