import React from 'react';
import Header from "./Header";
import Tagline from "./Tagline";
import Seo from "./seo";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="flex justify-center h-full">
                <Seo title="Joshua Welford" />

                <div className="container h-full mb-12">
                    <Header />

                    <div className="flex flex-col justify-center mt-16">
                        <Tagline />

                        <div className="m-4 p-4">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}