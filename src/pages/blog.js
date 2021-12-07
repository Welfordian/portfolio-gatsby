import React from "react";
import BlogPosts from "../components/Blog/BlogPosts";
import "react-activity/dist/Bounce.css";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import {graphql} from "gatsby";

class Blog extends React.Component {
    render () {
        const posts = this.props.data.allWpPost.edges

        return (
            <Layout>
                <p className="text-4xl mt-24">Blog Posts</p>

                <BlogPosts posts={posts} />
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

export const pageQuery = graphql`
  query {
    allWpPost {
      edges {
        node {
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`