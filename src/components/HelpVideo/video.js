import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import './video.css';

const video = () => {
    const videoRender = (mediaSize, id) => {
        let render;
        if (mediaSize.matches) {
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
    let size = window.matchMedia('(max-width:900px )')
    let ren = videoRender(size, '418706235')
    // size.addListener(videoRender)
    return (
        <div className="video">
            {ren}
        </div>
            
    )
}
export default video;
