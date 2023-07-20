import React from 'react'
import ReactPlayer from 'react-player/youtube'

const VideoPlayer = ({url}) => {
  return (
    <div className='player-wrapper'>
        <ReactPlayer
            className='react-player'
            url={url}
            controls='true'
            width='70%'
            height='70%'
        />
    </div>
  )
}

export default VideoPlayer