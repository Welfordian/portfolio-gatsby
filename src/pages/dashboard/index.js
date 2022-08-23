import React from 'react';
import {isBrowser, isLoggedIn} from "../../services/auth";
import DashboardLayout from "../../components/Dashboard/Layout";

class DashboardIndex extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: isLoggedIn()
        }
        
        if (! this.state.isLoggedIn) {
            isBrowser() && (window.location.href = '/login')
        }
    }

    render () {        
        return (
            <DashboardLayout>
                
            </DashboardLayout>
        )
    }
}

export default DashboardIndex