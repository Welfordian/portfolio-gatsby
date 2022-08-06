import React from 'react';
import Header from "../Header";
import Seo from "../seo";
import {Helmet} from "react-helmet";
import Navigation from "./Navigation";

export default class Layout extends React.Component {
    render() {
        return (
            <div className="flex justify-center h-full">
                <Seo title="Joshua Welford" />

                <div className="container h-full mb-12 flex flex-col">
                    {this.props.hideHeader ? '' : <Header />}

                    <div className="grid grid-cols-1 md:grid-cols-2 px-8 lg:grid-cols-4 grow flex mt-8 pb-12">
                        <div className="grow-0 space-x-1 text-white">
                            <Navigation>
                                <h1 className={`p-6 text-2xl bg-black`}>Dashboard</h1>
                            </Navigation>
                        </div>
                        
                        <div className="col-span-3 grow text-white p-3 bg-black/70 overflow-auto">
                            {this.props.children}
                        </div>
                    </div>
                </div>

                <Helmet
                    htmlAttributes={{
                        class: 'dashboard-layout',
                    }}
                />
            </div>
        );
    }
}