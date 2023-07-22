import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'

const Exercise = () => {
    // クイズにする
    const [quizMode, setQuizMode] = useState(false);
    // 現在時刻表示
    const [value, setValue] = useState(new Date());
    useEffect(()=>{
        const interval = setInterval(()=>setValue(new Date()),1000);
        return ()=>{
            clearInterval(interval);
        };
    },[]);

    // 手動設定時刻
    const [hour, setHour] = useState(1);
    const [minute, setMinute] = useState(10);
    const [second, setSecond] = useState(30);

    // 問題設定
    const [questionNum, setQuestionNum] = useState(0);
    const question = [
        {
            hour: 1,
            minute: 11,
            second: 30
        },
        {
            hour: 2,
            minute: 34,
            second: 45
        }
    ]; 
    const [message, setMessage] = useState('');
    const handleCheckTime =() =>{
        setSecond(second % 60);
        setMinute((minute + Math.floor(second / 60)) % 60);
        setHour((hour + Math.floor(minute / 60)) % 24);
        if(hour === question[questionNum].hour && minute === question[questionNum].minute && second === question[questionNum].second){
            setMessage('あってるよ！');
        }else{
            setMessage('ちがうよ！');
        }
    }

  return (
    <div className='exercise'>
        <NavBar />
        {quizMode?
        <div className='quiz'>
            <h1>{question[questionNum].hour.toString().padStart(2, '0')}じ{question[questionNum].minute.toString().padStart(2, '0')}ふん{question[questionNum].second.toString().padStart(2, '0')}びょうにあわせてみよう</h1>
            <Clock 
                value={new Date(2002, 0, 23, hour, minute, second)}
                size={'30vw'} 
                renderNumbers={true}
                renderSecondHand={true}
            />
            <button onClick={()=>setHour(hour+1)}>+1じかん</button>
            <button onClick={()=>setHour(hour-1)}>-1じかん</button>
            <button onClick={()=>setMinute(minute+1)}>+1ふん</button>
            <button onClick={()=>setMinute(minute-1)}>-1ふん</button>
            <button onClick={()=>setSecond(second+1)}>+1びょう</button>
            <button onClick={()=>setSecond(second-1)}>-1びょう</button>
            <button onClick={handleCheckTime}>答え合わせする</button>
            <p>{message}</p>
            {questionNum<question.length-1?
                <button onClick={() => setQuestionNum(questionNum+1)}>次の問題に挑戦する</button>
                :
                <button onClick={() => {setQuizMode(false)
                    setQuestionNum(0)}}>これが最後の問題だよ！現在時刻に戻そうか？</button>
            }
        </div>
        :
        <div className='real-time'>
            <p>今は{value.getHours().toString().padStart(2, '0')}じ{value.getMinutes().toString().padStart(2, '0')}ふんだよ</p>
            <Clock 
                value={value}
                size={'30vw'} 
                renderNumbers={true}
                renderSecondHand={false}
            />
            <button onClick={()=>setQuizMode(true)}>クイズに挑戦してみる？</button>
        </div>
        }
    </div>
  )
}

export default Exercise