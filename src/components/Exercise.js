import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'

const Exercise = () => {
    const [value, setValue] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>setValue(new Date()),1000);
        return ()=>{
            clearInterval(interval);
        };
    },[]);

  return (
    <div className='exercise'>
        <NavBar />
        <Clock 
            value={new Date(2023,6,17,17,40)}
            size={'30vw'} 
            renderNumbers={true}
            renderSecondHand={false}
        />
    </div>
  )
}

export default Exercise