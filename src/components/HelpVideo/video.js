import React, { useLayoutEffect, useState } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import './video.css';

const useWindowSize = () => {
    const [size, setSize] = useState([0,0]);
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        } 
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const Video = () => {
    const videoRender = (width,id) => {
        let render;
        if (width < 900) {
            render = <Vimeo
                        video={id} 
                        width = '350px'
                    />
        } else {
            render = <Vimeo
                        video = {id}
                        width = '900px'
                    />
        }
        return render
    }
    
    const [width, height] = useWindowSize();
    let ren = videoRender(width, '418706235')
    return (
        <div className="video">
            {ren}
        </div>
            
    )
}
export default Video;

