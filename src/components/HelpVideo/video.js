import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import './video.css';

const video = () => {
    return (
            <Vimeo
                className="video"
                // responsive='true'
                video="418706235"   
            />
    )
}
export default video;
