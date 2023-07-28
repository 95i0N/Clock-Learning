import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Clock from 'react-clock'
import Quiz from './Quiz'
import 'react-clock/dist/Clock.css'
import '../custom/Play.css';


const Play = () => {
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
   const [hour, setHour] = useState(6);
   const [minute, setMinute] = useState(0);

   // 問題設定
   const [questionNum, setQuestionNum] = useState(0);
   const question = [
       {
           hour: 3,
           minute: 0,
       },
       {
           hour: 12,
           minute: 0,
       },
       {
           hour: 4,
           minute: 30,
       },
       {
           hour: 7,
           minute: 30,
       },
       {
           hour: 6,
           minute: 45,
       },
       {
           hour: 2,
           minute: 10,
       },
       {
           hour: 4,
           minute: 55,
       },
       {
           hour: 1,
           minute: 22,
       },
       {
           hour: 11,
           minute: 46,
       },
       {
           hour: 5,
           minute: 7,
       }
   ]; 
   const [message, setMessage] = useState('');
   const handleCheckTime =() =>{
       setMinute(minute);
       setHour((hour + Math.floor(minute / 60)) % 24);
       if(hour === question[questionNum].hour && minute === question[questionNum].minute){
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
           <h1>{question[questionNum].hour.toString().padStart(2, '0')}じ{question[questionNum].minute.toString().padStart(2, '0')}ふんにあわせてみよう</h1>
           <Clock 
               value={new Date(2002, 0, 23, hour, minute,0)}
               size={'30vw'} 
               renderNumbers={true}
               renderSecondHand={false}
           />
           <div className='button-container'>
                <button onClick={()=>setHour(hour+1)}>+1じかん</button>
                <button onClick={()=>setHour(hour-1)}>-1じかん</button>
                <button onClick={()=>setMinute(minute+1)}>+1ふん</button>
                <button onClick={()=>setMinute(minute-1)}>-1ふん</button>
           </div>
           
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
           <p>今は{value.getHours().toString().padStart(2, '0')}じ{value.getMinutes().toString().padStart(2, '0')}ふん{value.getSeconds().toString().padStart(2, '0')}びょうだよ</p>
           <Clock 
               value={value}
               size={'30vw'} 
               renderNumbers={true}
               renderSecondHand={true}
           />
           <button onClick={()=>setQuizMode(true)}>クイズに挑戦してみる？</button>
       </div>
       }
   </div>
 )
}

export default Play