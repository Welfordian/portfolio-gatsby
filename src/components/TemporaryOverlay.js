import React from 'react'
import { Transition } from '@headlessui/react'
import {isBrowser} from "../services/auth";

class TemporaryOverlay extends React.Component {
    constructor(props) {
        super(props);

        let isVisible = true; //isBrowser() && localStorage.getItem('overlay-seen') === null ? true : false;

        this.state = {
            visible: isVisible,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            //this.setState({ visible: false })

            localStorage.setItem('overlay-seen', true);
        }, 6500);
    }

    render () {
        return (
            <Transition
                show={this.state.visible}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-1000"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className={`fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col gap-12 items-center justify-center z-[60]`}>
                    <p className={`text-4xl md:text-6xl`}>Queen Elizabeth II</p>
                    <p className={`text-3xl md:text-5xl`}>1926 - 2022</p>
                    <img src="/Vignette_Queen.jpg" />
                </div>
            </Transition>
        )
    }
}

export default TemporaryOverlay