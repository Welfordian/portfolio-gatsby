import React from 'react';
import Layout from "../components/Layout";
import {Helmet} from "react-helmet";

class QuizBuilder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className={`flex flex-col grow gap-12 justify-between items-center mx-auto w-full`}>
                    <div className={`flex flex-col gap-12 text-center w-full md:w-2/3`}>
                        <h1 className={`text-2xl md:text-4xl mt-24`}>Quiz Builder</h1>

                        <div className={`flex flex-wrap justify-center w-full md:w-2/3 self-center md:gap-8`}>
                            <button
                                onClick={() => { this.props.onSelect(10) }}
                                className={`bg-black hover:bg-black/70 text-white px-8 md:px-12 py-3 md:py-5 self-start`}
                            >Create Quiz</button>
                        </div>
                    </div>
                </div>

                <Helmet
                    htmlAttributes={{
                        class: 'watch-together',
                    }}
                />
            </>
        );
    }
}

export default QuizBuilder