import React from "react";
import BlogPostPreview from "./BlogPostPreview";

export default class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-max mt-12">
                    {
                        this.props.posts.map((post) => {
                            return (
                                <BlogPostPreview
                                    title={post.node.title}
                                    intro={post.node.excerpt}
                                    slug={post.node.slug}
                                    introImage={post.node.featuredImage.node.sourceUrl}/>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}