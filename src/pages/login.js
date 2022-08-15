import React from "react"
import { navigate } from "gatsby"
import {handleLogin, isBrowser, isLoggedIn} from "../services/auth"
import Layout from "../components/Layout";
import Notification from "../components/Notification";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showNotification: false,
            notificationMessage: '',
            username: ``,
            password: ``,
        }
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        handleLogin(this.state).then(r => {
            isBrowser() && (window.location.href = '/dashboard/')
        }).catch(r => {
            this.setState({
                username: '',
                password: ''
            })

            this.setState({ showNotification: true, notificationMessage: r.error });
        })
    }
    render() {
        if (isLoggedIn()) {
            isBrowser() && (window.location.href = '/dashboard/')
        }

        return (
            <div className={`flex justify-center`}>
                <div className={`flex flex-col bg-black text-white w-1/2 p-12 shadow-2xl shadow-gray-700 relative`}>
                    <Notification show={this.state.showNotification} onHide={() => this.setState({ showNotification: false })} message={this.state.notificationMessage}></Notification>
                    <form className={`flex flex-col gap-6`} method="post" onSubmit={event => { this.handleSubmit(event) }}>
                        <label className={`flex flex-col gap-4`}>
                                <span className={`text-xl`}>
                                    Username
                                </span>

                            <input autoComplete={`off`} type="text" name="username" value={this.state.username} onChange={this.handleUpdate} className={`focus:bg-gray-200 focus:text-black border-4 border-white bg-black text-white p-2 outline-none w-full pr-9 rounded-none`}/>
                        </label>

                        <label className={`flex flex-col gap-4`}>
                                <span className={`text-xl`}>
                                    Password
                                </span>

                            <input autoComplete={`off`} type="password" name="password" value={this.state.password} onChange={this.handleUpdate} className={`focus:bg-gray-200 focus:text-black border-4 border-white bg-black text-white p-2 outline-none w-full pr-9 rounded-none`} />
                        </label>

                        <button className={`bg-white p-3 text-black mt-3 hover:bg-gray-300`}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login