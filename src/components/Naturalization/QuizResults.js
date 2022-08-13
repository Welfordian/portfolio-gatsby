import React from 'react'

class QuizResults extends React.Component {
    render() {
        return (
            <div className={`flex flex-col grow gap-12 justify-between items-center mx-auto`}>
                <div className={`flex flex-col gap-12 text-center w-full md:w-2/3`}>
                    <h1 className={`text-2xl md:text-4xl mt-24`}>You got {this.props.correct.length} / {this.props.questions.length} correct!</h1>
                </div>
            </div>                    
        )
    }
}

export default QuizResults