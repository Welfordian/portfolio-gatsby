import React from "react";
import {Bounce} from "react-activity";
import "react-activity/dist/Bounce.css";
import axios from "axios";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import {connect} from "react-redux";

const isBrowser = typeof window !== "undefined"

const renderPost = (setState, posts) => {
    const post = posts.filter(post => {
        return post.slug === this.state.slug;
    })[0] || {};

    if (! post) {
        setState({ post, gotError: true });
    } else {
        setState({ post });
    }
}

class BlogPostFull extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: isBrowser ? window.location.pathname.replace('/blog/','') : null,
            post: false,
            gotError: false,
        }
    }

    componentDidMount() {
        let {posts} = this.props;
        const {blogPostsLoaded} = this.props;

        if (! posts.length) {
            axios.get('https://api.welford.me/v1/posts').then(r => {
                blogPostsLoaded(r.data);
            })
        }

        if (posts.length) {
            const post = posts.filter(post => {
                return post.slug === this.state.slug;
            })[0] || {};

            if (!post) {
                this.setState({post, gotError: true});
            } else {
                this.setState({post});
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.posts.length === 0 && this.props.posts.length) {
            const {posts} = this.props;

            const post = posts.filter(post => {
                return post.slug === this.state.slug;
            })[0] || {};

            if (!post) {
                this.setState({post, gotError: true});
            } else {
                this.setState({post});
            }
        }
    }

    render() {
        return (
            <Layout>
                {
                    this.state.post
                        ? this.state.gotError ? <NotFound /> : <div>
                                <p className="text-4xl mt-12">{ this.state.post.title }</p>

                                <div className="mt-12" dangerouslySetInnerHTML={{ __html: this.state.post.content }}></div>
                            </div>
                        : <Bounce
                            size={50}
                            speed={0.5}/>

                }
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