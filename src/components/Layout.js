import React from 'react';
import Header from "./Header";
import Seo from "./seo";
import NowPlaying from "./NowPlaying";
import ThemeContext from "../context/Layout";
import TemporaryOverlay from "./TemporaryOverlay";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isDark: false,
        }
    }

    componentDidMount() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.setState({ isDark: true });
        } else {
            this.setState({ isDark: false });
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            this.setState({ isDark: e.matches});
        })
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div className={`${this.state.isDark ? 'dark' : ''}`}>
                        <div className={`flex justify-center min-h-screen dark:bg-black`}>
                            <Seo title="Joshua Welford" />

                            <div className="container h-full flex flex-col">
                                {/* {theme.hideHeader ? '' : <Header location={this.props.location} onColorSchemeChange={() => {}} />} */}

                                <div className={`flex flex-col grow content-container`}>
                                    <div className="grow flex flex-col content">
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>

                            {/*<NowPlaying></NowPlaying>*/}
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}