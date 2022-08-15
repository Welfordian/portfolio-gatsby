import React from 'react';
import Header from "./Header";
import Seo from "./seo";
import SocialLinks from "./SocialLinks";
import NowPlaying from "./NowPlaying";
import ThemeContext from "../context/Layout";

export default class Layout extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className="flex justify-center h-full pb-12">
                        <Seo title="Joshua Welford" />

                        <div className="container h-full mb-12 flex flex-col">
                            {theme.hideHeader ? '' : <Header />}

                            <div className={`flex flex-col ${theme.marginTop ? '' : 'mt-16'} grow`}>
                                <div className="m-4 p-4 grow flex flex-col">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>

                        <NowPlaying></NowPlaying>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}