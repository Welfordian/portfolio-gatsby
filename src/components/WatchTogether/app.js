import * as React from "react"
import { navigate } from 'gatsby';
import Layout from "../Layout";

class App extends React.Component {
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    createRoom() {
        navigate(`/watch-together/${this.uuidv4()}`);
    }

    render() {
        return (
            <Layout hideSocial hideTagline>
                <h1 className="text-4xl text-center">This is a room.</h1>
            </Layout>
        );
    }
}

export default App
