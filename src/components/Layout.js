import React from 'react';
import Header from "./Header";
import Seo from "./seo";
import SocialLinks from "./SocialLinks";
import AppUpdateAvailable from "./AppUpdateAvailable";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="flex justify-center h-full">
                <Seo title="Joshua Welford" />

                <div className="container h-full mb-12 flex flex-col">
                    {this.props.hideHeader ? '' : <Header />}

                    <div className="flex flex-col mt-16 grow">
                        <SocialLinks hideTagline={this.props.hideTagline} hideSocial={this.props.hideSocial} />

                        <div className="m-4 p-4 grow flex flex-col">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                
                <AppUpdateAvailable></AppUpdateAvailable>
            </div>
        );
    }
}