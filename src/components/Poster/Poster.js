import React from 'react';
import content from './PosterContent';
import './Poster.css';
import image1 from '../../images/image1.png';
const Poster = () => {
    let right = [], left = [], footer = '';
    for (let i of content) {
        if (i.footer) 
            footer = <div className="card-footer content">
                        {i.footer}
                    </div>
        else footer = ""
        if (i.position === 'left'){
            left.push(
                <>
                    <div keyid={`${content.indexOf(i)}`} className="card left" >
                        <div className="card-header">
                            <div className="sup">Q</div>
                            <div className="content">
                                {i.title}
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="sup">A</div>
                            <div className="content" 
                                dangerouslySetInnerHTML={{
                                __html: i.content}}>
                            </div>
                        </div>
                        {footer}
                    </div>
                    <div className="circle" style={ { "float":"right" }}>
                    </div>
                </>
            )
        } else {
            if (content.indexOf(i) !== content.length - 1)
                right.push(
                    <>
                        <div className="card right" >
                            <div className="card-header">
                                <div className="sup">Q</div>
                                <div className="content">
                                    {i.title}
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="sup">A</div>
                                <div className="content"
                                    dangerouslySetInnerHTML={{
                                        __html: i.content}}>
                                </div>
                            </div>
                        </div>
                        <div className="circle" style={{"float": "left"}}>
                        </div>
                    </>
                )
            else {
                right.push(
                    <>
                        <div className="cardimage right" >
                            <img src={image1} className="img1" alt="group"/>
                            <div className="card-header">
                                <div className="sup">Q</div>
                                <div className="content">
                                    {i.title}
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="sup">A</div>
                                <div className="content"
                                    dangerouslySetInnerHTML={{
                                        __html: i.content}}>
                                </div>
                            </div>
                        </div>
                        <div className="circle" style={{"float": "left"}}>
                        </div>
                    </>
                )
            }
        }
    }
    return (
        <div className="row">
            <div className="col-md-6 card-wrapper">
                {left}
            </div>
            <div className="col-md-6 card-wrapper">
                {right}
            </div>
        </div>
    )
}

export default Poster;
