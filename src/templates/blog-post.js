import React from "react";
import "react-activity/dist/Bounce.css";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import {graphql} from "gatsby";
import PropTypes from "prop-types"
import SocialLinks from "../components/SocialLinks";
import {Helmet} from "react-helmet";

class BlogPostFull extends React.Component {
    render() {
        const post = this.props.data.wpPost

        console.log(post);

        return (
            <>
                <SocialLinks />
                
                <div className={`dark:text-gray-300`}>
                    <p className="text-4xl mt-12" dangerouslySetInnerHTML={{ __html: post.title }}></p>

                    <div className="mt-12 blog-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>

                <Helmet
                    htmlAttributes={{
                        class: 'links-page',
                    }}
                />
            </>
        );
    }
}

const mapStateToProps = ({posts}) => {
    return { posts }
}
const mapDispatchToProps = dispatch => {
    return { blogPostsLoaded: (posts) => {
            dispatch({ type: `BLOG_POSTS_LOADED`, posts })
        }
    }
}

BlogPostFull.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostFull);

export const postQuery = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
            sourceUrl
          }
        }
    }
  }
`