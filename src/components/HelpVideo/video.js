import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import './video.css';

const Video = () => {

    return (
        <div className="video">
            <Vimeo 
                video="447888405"
                responsive = 'true'
            />
        </div>
            
    )
}
export default Video;

