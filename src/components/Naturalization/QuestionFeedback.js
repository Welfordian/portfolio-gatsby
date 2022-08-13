import React from 'react'

class QuestionFeedback extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        if (this.props.isCorrect === true) {
            return (
                <div className={`w-2/3 flex flex-col items-center self-center`}>
                    <p className={`text-2xl`}>That was correct!</p>

                    <button className={`mt-4 bg-black hover:bg-black/70 text-white px-8 md:px-12 py-3 md:py-5 mt-5`} onClick={() => this.props.onNext()}>Continue</button>
                </div>
            )
        }
        
        if (this.props.isCorrect === false) {
            return (
                <div className={`w-2/3 flex flex-col items-center self-center`}>
                    <p className={`text-2xl`}>That was incorrect!</p>

                    <button className={`mt-4 bg-black hover:bg-black/70 text-white px-8 md:px-12 py-3 md:py-5 w-full`} onClick={() => this.props.onNext()}>Continue</button>
                </div>
            )
        }
        
        return (<></>);
    }

}

export default QuestionFeedback