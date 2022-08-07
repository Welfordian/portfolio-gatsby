import React from 'react';
import {isBrowser, isLoggedIn} from "../../services/auth";
import { navigate } from "gatsby"
import Layout from "../../components/Layout";
import DashboardLayout from "../../components/Dashboard/Layout";

class DashboardIndex extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: isLoggedIn()
        }
        
        if (! this.state.isLoggedIn) {
            isBrowser && (window.location.hrfe = '/login')
        }
    }

    render () {
        if (! this.state.isLoggedIn) {
            return (
                <Layout hideSocial hideTagline>
                    <div className={`text-center text-3xl`}>
                        Unauthorized
                    </div>
                </Layout>
            );
        }
        
        return (
            <DashboardLayout>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
                <p>HELLO</p>
            </DashboardLayout>
        )
    }
}

export default DashboardIndex