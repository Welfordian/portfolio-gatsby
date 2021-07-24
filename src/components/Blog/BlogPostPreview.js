import React from "react";
import {Link} from "gatsby";

export default class BlogPostPreview extends React.Component {
    render () {
        return (
            <div className="flex flex-col justify-between bg-black text-white p-8">
                <div>
                    <p className="font-bold text-xl mb-8">{this.props.title}</p>
                    <p className="mt-2 text-justify">
                        {this.props.intro}
                    </p>
                </div>
                <Link to={`/blog/${this.props.slug}`}
                      className="mt-3 font-semibold text-gray-500 text-right cursor-pointer hover:text-white">Read More</Link>
            </div>
        );
    }
}