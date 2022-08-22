import React from "react";
import {Link} from "gatsby";
import BlogTags from "./BlogTags";

export default class BlogPostPreview extends React.Component {
    render () {
        return (
            <div className="flex flex-col justify-between bg-black text-white dark:text-gray-300 p-8">
                <div>
                    <img className={`mb-8`} src={this.props.introImage} />
                    <p className="font-bold text-xl mb-8" dangerouslySetInnerHTML={{ __html: this.props.title }}></p>
                    <p className="mt-2 text-justify" dangerouslySetInnerHTML={{ __html: this.props.intro }}></p>
                </div>
                
                <BlogTags tags={this.props.tags} />
                
                <Link 
                    to={`/blog/${this.props.slug}`}
                    className="mt-8 font-semibold text-gray-500 text-right cursor-pointer hover:text-white dark:hover:text-gray-300"
                >Read More</Link>
            </div>
        );
    }
}