import React from 'react';

class Notification extends React.Component {
    constructor() {
        super();
        
        this.state = {
            hideTimeout: setTimeout.prototype
        }
    }
    
    componentWillUnmount() {
        clearTimeout(this.state.hideTimeout);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.show === true && prevProps.show === false) {
            this.setState(({
                clearTimeout: setTimeout(() => {
                    this.props.onHide();
                }, 4500)
            }))
        }
    }

    render () {
        if (! this.props.show) {
            return "";
        }
        
        return (
            <div className={`absolute top-0 right-0 bg-black px-4 py-3 shadow-lg text-white -mt-12`}>
                { this.props.message }
            </div>
        )
    }
}

export default Notification