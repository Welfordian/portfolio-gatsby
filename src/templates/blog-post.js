import React from "react";
import "react-activity/dist/Bounce.css";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import {graphql, StaticQuery} from "gatsby";

const isBrowser = typeof window !== "undefined"

class BlogPostFull extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: isBrowser ? window.location.pathname.replace('/blog/','') : null,
        }
    }

    render() {
        const postBySlug = graphql`
            query SinglePost {
              wpPost(slug: {eq: "why-fetch-the-same-data-twice"}) {
                title
                content
              }
            }
        `

        return (
            <Layout>
                <StaticQuery query={postBySlug} render={data => (
                    <div>
                        <p className="text-4xl mt-12" dangerouslySetInnerHTML={{ __html: data.wpPost.title }}></p>

                        <div className="mt-12 blog-content" dangerouslySetInnerHTML={{ __html: data.wpPost.content }}></div>
                    </div>
                )} />
            </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostFull);