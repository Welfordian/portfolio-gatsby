import React from "react";
import BlogPosts from "../components/Blog/BlogPosts";
import "react-activity/dist/Bounce.css";
import Layout from "../components/Layout";
import {connect} from "react-redux";
import {graphql} from "gatsby";
import BlogTags from "../components/Blog/BlogTags";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            tagFilter: []
        }
    }
    
    onTagUpdate(tags) {
        this.setState({
            tagFilter: tags
        })
    }
    
    render () {
        let posts = this.props.data.allWpPost.edges
        let tags  = this.props.data.allWpTag.nodes
        
        if (this.state.tagFilter.length) {
            this.state.tagFilter.forEach(tag => {
                posts = posts.filter((post) => {
                    return post.node.tags.nodes.filter(_tag => {
                        return _tag.id === tag;
                    }).length;
                })
            });
        }

        return (
            <Layout>
                <p className="text-4xl mt-24">Blog Posts</p>

                <BlogTags tags={tags} onTagUpdate={this.onTagUpdate.bind(this)}/>

                <BlogPosts posts={posts} />
            </Layout>
        );
    }
}

const mapStateToProps = ({posts, tags}) => {
    return { posts, tags }
}

export default connect(mapStateToProps)(Blog);

export const pageQuery = graphql`
  query {
    allWpPost {
      edges {
        node {
          title
          excerpt
          slug
          tags {
            nodes {
              name
              id
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    
    allWpTag {
        nodes {
            id
            name
        }
    }
  }
`