import React from 'react';
import App from "../components/Naturalization/app";
import {Helmet} from "react-helmet";

class Naturalization extends React.Component {
    render() {
        return (
            <>
                <App></App>

                <Helmet
                    htmlAttributes={{
                        class: 'watch-together',
                    }}
                />
            </>
        );
    }
}

export default Naturalization