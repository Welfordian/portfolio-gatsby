import React from 'react';

class MouseTrail extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            x: 0,
            y: 0,
        }
    }

    componentDidMount() {
        document.addEventListener('mousemove', e => {
            console.log(e);
            
            this.setState({
                x: e.screenX,
                y: e.screenY,
            })
        });

        document.addEventListener('scroll', e => {
            console.log(e);

            this.setState({
                x: e.screenX,
                y: e.screenY,
            })
        });
    }

    render() {
        return (
            <div className="mix-blend-difference w-6 h-6 rounded-full fixed bg-white pointer-events-none" style={{left: (this.state.x - 15), top: (this.state.y - 130)}}></div>
        );
    }
}

export default MouseTrail