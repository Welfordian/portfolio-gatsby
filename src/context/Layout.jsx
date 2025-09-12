import React from "react"

const defaultState = {
    social: true,
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.Component {
    state = {
        social: true
    }

    componentDidMount() {
        
    }
    
    hideSocial () {
        this.setState({
            social: false,
        })
    }

    render() {
        const { children } = this.props
        
        return (
            <ThemeContext.Provider
                value={{
                    social: this.state.social
                }}
            >
                {children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContext

export { ThemeProvider }