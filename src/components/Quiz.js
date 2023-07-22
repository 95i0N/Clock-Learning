import React, { useState } from 'react'
import Clock from 'react-clock';
import NavBar from './NavBar';

const Quiz = () => {
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [questionNum, setQuestionNum] = useState(0);
    const question = [
        {
            time: new Date(2002,0,23,9,0,0),
            secondHand: false,
            answerOption:[
                {answerText: '111', isCorrect: true},
                {answerText: '222', isCorrect: false},
                {answerText: '333', isCorrect: false},
                {answerText: '444', isCorrect: false},
            ]
        },
        {
            time: new Date(2002,0,23,8,0,0),
            secondHand: false,
            answerOption:[
                {answerText: '5', isCorrect: true},
                {answerText: '6', isCorrect: false},
                {answerText: '7', isCorrect: false},
                {answerText: '8', isCorrect: false},
            ]
        }
    ];
    const handleAnswerOptionClick = (isCorrect) =>{
        if(isCorrect){
            setScore(score+1);
        }
        if(questionNum<question.length-1){
            setQuestionNum(questionNum+1);
        }else{
            setShowScore(true);
        }
    }
  return (
    <div className='question'>
        <NavBar></NavBar>
        {showScore?
        <div className='score-section'>
            <span>{question.length}もんちゅう{score}もんせいかい！</span>
        </div>
        :
        <>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Q.{questionNum+1}</span>
                    <h1>時計の指している時間はどれでしょう</h1>
                </div>
                <Clock 
                value={question[questionNum].time}
                size={'30vw'} 
                renderNumbers={true}
                renderSecondHand={question[questionNum].secondHand}
                />
            </div>
            <div className='answer-section'>
                {question[questionNum].answerOption.map((answerOption)=>(
                    <button onClick={()=>handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
            </div>
        </>
        
        }
        
    </div>
    
  )
}

export default Quiz