import React, { useState } from 'react'
import NavBar from './NavBar'
import VideoPlayer from './VideoPlayer';

const Lecture = () => {
    
    return (
        <div className='lecture'>
            <NavBar />
            <VideoPlayer 
            url='https://www.youtube.com/watch?v=SE19_kLsq0s' 
            />
        </div>

        
    );
}

export default Lecture