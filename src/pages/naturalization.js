import React from 'react';
import App from "../components/Naturalization/app";
import {Helmet} from "react-helmet";

class Naturalization extends React.Component {
    render() {
        return (
            <div class={`mt-32`}>
                <App></App>

                <Helmet
                    htmlAttributes={{
                        class: 'watch-together',
                    }}
                />
            </div>
        );
    }
}

export default Naturalization