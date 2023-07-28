import React, { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Clock from 'react-clock';
import NavBar from './NavBar';
import '../custom/Quiz.css';

const Quiz = () => {
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const question = [
        // 1問目
        {
            time: new Date(2002,0,23,3,0,0),
            answerOption:[
                {answerText: '9じ ピッタリ', isCorrect: false},
                {answerText: '0じ 3ふん', isCorrect: false},
                {answerText: '3じ ピッタリ', isCorrect: true},
                {answerText: '0じ 15ふん', isCorrect: false},
            ]
        },
        // 2問目
        {
            time: new Date(2002,0,23,12,0,0),
            answerOption:[
                {answerText: '0じ ピッタリ', isCorrect: true},
                {answerText: '6じ ピッタリ', isCorrect: false},
                {answerText: '0じ 12ふん', isCorrect: false},
                {answerText: '1じ ピッタリ', isCorrect: false},
            ]
        },
        // 3問目
        {
            time: new Date(2002,0,23,4,30,0),
            answerOption:[
                {answerText: '4じ 6ふん', isCorrect: false},
                {answerText: '5じ 30ふん', isCorrect: false},
                {answerText: '6じ 23ふん', isCorrect: false},
                {answerText: '4じ 30ふん', isCorrect: true},
            ]
        },
        // 4問目
        {
            time: new Date(2002,0,23,7,30,0),
            answerOption:[
                {answerText: '7じ 30ふん', isCorrect: true},
                {answerText: '4じ 30ふん', isCorrect: false},
                {answerText: '4じ 06ふん', isCorrect: false},
                {answerText: '8じ 30ふん', isCorrect: false},
            ]
        },
        // 5問目
        {
            time: new Date(2002,0,23,6,45,0),
            answerOption:[
                {answerText: '7じ 45ふん', isCorrect: false},
                {answerText: '7じ 9ふん', isCorrect: false},
                {answerText: '9じ 7ふん', isCorrect: false},
                {answerText: '6じ 45ふん', isCorrect: true},
            ]
        },
        // 6問目
        {
            time: new Date(2002,0,23,2,10,0),
            answerOption:[
                {answerText: '2じ 2ふん', isCorrect: false},
                {answerText: '10じ 10ふん', isCorrect: false},
                {answerText: '2じ 10ふん', isCorrect: true},
                {answerText: '3じ 10ふん', isCorrect: false},
            ]
        },
        // 7問目
        {
            time: new Date(2002,0,23,4,55,0),
            answerOption:[
                {answerText: '5じ 55ふん', isCorrect: false},
                {answerText: '4じ 55ふん', isCorrect: true},
                {answerText: '11じ 5ふん', isCorrect: false},
                {answerText: '11じ 25ふん', isCorrect: false},
            ]
        },
        // 8問目
        {
            time: new Date(2002,0,23,1,22,0),
            answerOption:[
                {answerText: '1じ 22ふん', isCorrect: true},
                {answerText: '4じ 23ふん', isCorrect: false},
                {answerText: '5じ 23ふん', isCorrect: false},
                {answerText: '2じ 23ふん', isCorrect: false},
            ]
        },
        // 9問目
        {
            time: new Date(2002,0,23,11,46,0),
            answerOption:[
                {answerText: '0じ 47ふん', isCorrect: false},
                {answerText: '11じ 46ふん', isCorrect: true},
                {answerText: '11じ 47ふん', isCorrect: false},
                {answerText: '9じ 59ふん', isCorrect: false},
            ]
        },
        // 10問目
        {
            time: new Date(2002,0,23,5,7,0),
            answerOption:[
                {answerText: '1じ 26ふん', isCorrect: false},
                {answerText: '5じ 7ふん', isCorrect: true},
                {answerText: '6じ 7ふん', isCorrect: false},
                {answerText: '2じ 5ふん', isCorrect: false},
            ]
        }
    ];
    const handleAnswerOptionClick = (isCorrect) =>{
        if(isCorrect){
            setScore(score+1);
        }

        const nextQuestion = currentQuestion + 1;
        if(currentQuestion<question.length-1){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowResult(true);
        }
    }

  return (
    <div className='question'>
        <NavBar></NavBar>
        {showResult?
        <div className='score-section'>
            <h3>クイズおつかれさま！</h3>
            <span>{score}もんせいかいだったよ！</span>
        </div>
        :
        <>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Q.{currentQuestion+1}</span>
                    <h1>時計の指している時間はどれでしょう</h1>
                </div>
                <Clock 
                value={question[currentQuestion].time}
                size={'30vw'} 
                renderNumbers={true}
                renderSecondHand={false}
                />
            </div>
            <div className='answer-section'>

                {question[currentQuestion].answerOption.map((option, index)=>(
                    <Button
                        key={index}
                        onClick={() => handleAnswerOptionClick(option.isCorrect)}
                        colorScheme="teal"
                        size="md"
                        variant="outline"
                        m={2}
                    >
                    {option.answerText}   
                    </Button>
                ))}
            </div>
        </>
        
        }
        
    </div>
    
  )
}

export default Quiz