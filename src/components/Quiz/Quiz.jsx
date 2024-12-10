import React from 'react';
import './Quiz.css';
import questions from '../../dataQuestions';

export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentQuestion: 0,
            showScore: false,
            score: 0
        }
    }

    clickHandler(isCorrect) {
        console.log(isCorrect);

        if(isCorrect) {
            this.setState(prevState => {
                return {
                    score: prevState.score + 1
                }
            })
        }

        if(this.state.currentQuestion === 3) {
            this.setState({ showScore: true })
        } else {
            this.setState(prevState => {
                return {
                    currentQuestion: prevState.currentQuestion + 1
                }
            })
        }
    }

    render() {
        return (
                <div className='app'>
                {this.state.showScore ?
                    (<div className='score-section'>
                    You scored {this.state.score} out of {questions.length}
                </div>) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {this.state.currentQuestion + 1}</span>/ {questions.length}
                            </div>
                            <div className='question-text'>{questions[this.state.currentQuestion]
                            .questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[this.state.currentQuestion].answerOptions.map(answer => (
                                <button key={answer.answerText} onClick={this.clickHandler.bind(this, answer.isCorrect)}>
                                {answer.answerText}</button>
                            ))}
                        </div>
                    </>    
                )}
                </div>
        )
    }
}