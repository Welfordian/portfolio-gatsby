import React from "react";
import axios from "axios";
import BlogPosts from "../components/Blog/BlogPosts";
import "react-activity/dist/Bounce.css";
import {Bounce} from "react-activity";
import Layout from "../components/Layout";

export default class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://jwelford.test/api/v1/posts').then(r => {
            this.setState({ posts: r.data });
        })
    }

    render () {
        return (
            <Layout>
                <p className="text-4xl mt-24">Blog Posts</p>

                {
                    this.state.posts.length
                        ? <BlogPosts posts={this.state.posts} />
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