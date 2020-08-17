import React from 'react';
import './PostHeader.css';
import messageIcon from '../../images/icon1.png';
import stripe1 from '../../images/logostripe.png';
import Header from '../Header/Header';

export default function PostHeader(props) { 
    let text, secondClass;
    if (props.value === "fixed") {
        secondClass = "second-bar"
        text = 
            <>
                <p className="large">
                    So, you're going with Everpost&nbsp;
                    <span>Complete Post. </span>
                    Awesome.
                </p>
                <p className="small">
                    So, you're going with Everpost&nbsp;
                    <span>Complete</span>
                    <span> Post.</span>
                    Awesome.
                </p>
                <button className="skip-button small">
                Skip to payment
                </button>
                <button className="small small-power">
                    <img src={stripe1} />
                </button>
            </>
    } else {
        secondClass = "question"
        text =  <>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 col-sm-12 col-xs-12 question-content">
                            <div className="row paynow">
                                <div className="col-md-4">
                                    <a href="#">
                                        <span className="num">1</span>
                                        <span className="description">Watch what's next?</span>
                                    </a>
                                </div>
                                <div className="col-md-4">
                                    <a href="#">
                                        <span className="num">2</span>
                                        <span className="description">Read FAQs</span>
                                    </a>
                                </div>
                                <div className="col-md-4">
                                    <a href="#">
                                        <span className="num">3</span>
                                        <span className="description">Make payment</span>
                                    </a>
                                </div>
                            </div>
                            <div className="message">
                                <img src={messageIcon} alt="messageIcon"/>
                                <p>
                                    Questions you might have.
                                </p>
                            </div>
                            <div className="message-text">
                                We've answered a list of expected questions
                                you may have as we get started together
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3"></div>
                        
                    </div>
                    
                               
                </>
    }
    return (
        <div className="container-fluid">
            <Header value={props.value}/>
            <div className={`${secondClass}`}>
                {text}
            </div>
        </div>
    )
}
