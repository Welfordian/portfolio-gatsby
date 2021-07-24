import React from "react";
import {Bounce} from "react-activity";
import "react-activity/dist/Bounce.css";
import axios from "axios";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";

const isBrowser = typeof window !== "undefined"

export default class BlogPostFull extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: isBrowser ? window.location.pathname.replace('/blog/','') : null,
            post: false,
            gotError: false,
        }
    }

    componentDidMount() {
        axios.get('http://jwelford.test/api/v1/posts/' + this.state.slug).then(r => {

            this.setState({ post: r.data });
        }).catch(() => {
            this.setState( { post: true, gotError: true });
        })
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