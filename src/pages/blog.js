import React from "react";
import BlogPosts from "../components/Blog/BlogPosts";
import "react-activity/dist/Bounce.css";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import {graphql} from "gatsby";
import {StaticQuery} from "gatsby";

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {blogPostsLoaded} = this.props;

        const allPostsQuery = graphql`
            query AllPosts {
              allWpPost {
                nodes {
                  content
                  excerpt
                  slug
                  title
                }
              }
            }
        `

        return (
            <Layout>
                <p className="text-4xl mt-24">Blog Posts</p>

                <StaticQuery query={allPostsQuery} render={data => {
                    blogPostsLoaded(data.allWpPost.nodes)

                    return (
                        <BlogPosts posts={data.allWpPost.nodes} />
                    )
                }} />
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