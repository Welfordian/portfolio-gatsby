import React from 'react'
import QuestionFeedback from "./QuestionFeedback";

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentIndex: 0,
            currentOptions: [],
            questionResult: null,
        }
    }
    
    componentDidMount() {
        this.setOptions();
    }

    setAnswer () {
        const shuffled = this.props.questions[this.state.currentIndex].answers.sort(() => 0.5 - Math.random());
        
        return shuffled.slice(0, 1).map(answer => {
            return {
                correct: true,
                text: answer
            }
        });
    }
    
    setDecoys () {
        const shuffled = this.props.questions[this.state.currentIndex].decoys.sort(() => 0.5 - Math.random());

        return shuffled.slice(0, 3).map(answer => {
            return {
                correct: false,
                text: answer
            }
        });
    }
    
    setOptions () {
        this.setState({
            currentOptions: [...this.setAnswer(), ...this.setDecoys()].sort(() => 0.5 - Math.random())
        });
    }
    
    answerQuestion (isCorrect) {        
        this.setState({
            questionResult: isCorrect
        })
        
        if (! isCorrect) {
            return this.props.onIncorrect(this.state.currentIndex);
        }

        return this.props.onCorrect(this.state.currentIndex);
    }
    
    nextQuestion () {
        this.setState({
            questionResult: null,
        })
        
        if (this.state.currentIndex < (this.props.questions.length - 1)) {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            }, () => {
                this.setOptions();
            })
        } else {
            this.props.onFinish();
        }
    }
    
    buttonClass (option) {
        let btnClass = '';
        
        if (this.state.questionResult !== null) {
            if (option.correct) {
                btnClass += ' bg-green-700 ';
            } else {
                btnClass += ' bg-red-700 ';
            }
            
            btnClass += ' cursor-not-allowed ';
        } else {
            btnClass += ' hover:bg-black/70 ';
        }
        
        return btnClass;
    }

    render() {        
        return (
            <div className={`flex flex-col grow gap-12 justify-between items-center mx-auto`}>
                <div className={`flex flex-col gap-12 text-center w-full md:w-2/3`}>
                    <h3 className={`text-xl md:text-4xl mt-24`}>{this.state.currentIndex + 1} / {this.props.questions.length}</h3>
                    <h1 className={`text-2xl md:text-4xl`}>{this.props.questions[this.state.currentIndex].question}</h1>

                    <div className={`flex flex-col flex-wrap items-center justify-center w-full md:w-2/3 self-center gap-4 md:gap-8`}>
                        {
                            this.state.currentOptions.map(option => {
                                return <button 
                                    onClick={() => { this.answerQuestion(option.correct) }} 
                                    disabled={this.state.questionResult !== null} 
                                    className={`${this.buttonClass(option)} bg-black text-white px-8 md:px-12 py-3 md:py-5 w-full`}
                                >{ option.text }</button>;
                            })
                        }
                    </div>
                    
                    <QuestionFeedback
                        isCorrect={this.state.questionResult}
                        onNext={() => this.nextQuestion()}
                    ></QuestionFeedback>
                </div>
            </div>
        );
    }
}

export default Quiz