import React from 'react';
import Questions from "./US-Citizenship.json";
import {Helmet} from "react-helmet";
import Intro from "./Intro";
import Quiz from "./Quiz";
import QuizResults from "./QuizResults";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            setSize: 10,
            isComplete: false,
            currentSet: [],
            correct: [],
            incorrect: [],
        }
    }

    setQuestions(n) {
        this.setState({
            currentSet: this.selectQuestions(Questions, n)
        });
    }

    selectQuestions (array, n) {
        const shuffled = array.sort(() => 0.5 - Math.random());
        
        return shuffled.slice(0, n);
    }
    
    render() {
        return (
            <div className={`flex grow`}>

                {
                    this.state.currentSet.length === 0
                    ?
                        <Intro
                            onSelect={n => this.setQuestions(n)}
                        ></Intro>
                    :
                        this.state.isComplete
                        ?
                            <QuizResults
                                questions={this.state.currentSet}
                                correct={this.state.correct}
                                incorrect={this.state.incorrect}
                            ></QuizResults>
                        :
                            <Quiz
                                questions={this.state.currentSet}
                                onCorrect={(index) => { this.setState({ correct: [index, ...this.state.correct]}) }}
                                onIncorrect={(index) => { this.setState({ incorrect: [index, ...this.state.incorrect]}) }}
                                onFinish={() => { this.setState({isComplete: true}) }}
                            ></Quiz>    
                }
            </div>
        );
    }
}

export default App