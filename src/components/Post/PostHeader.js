import React from 'react';
import './PostHeader.css';
import logo from '../../images/logo.png';
import messageIcon from '../../images/icon1.png';

export default function PostHeader(props) { 
    let button, text, logoClass, stripeClass;
    if (props.value === "skip"){
        button = <button className='skip'>
                    <span>Skip to payment</span>
                </button>
        text = <p>
                So, you're going with Everpost<br />
                <span>Complete Post.</span> 
                Awesome.
            </p>
        logoClass = "col-md-3 ever-logo"
        stripeClass = "col-md-6 stripe-logo"
    }
        
    if (props.value == "pay"){
        button = <button className='skip hidden-skip'>
                    <span>Pay now</span>
                </button>
        logoClass = "col-md-3 ever-logo hidden-logo"
        stripeClass = "col-md-6 stripe-logo hidden-stripe"
        text =  <>
                    <div className="row paynow">
                        <div className="col-md-4">
                            <a href="#">
                                <span className="number">1</span>
                                <span className="description">Watch what's next?</span>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="#">
                                <span className="number">2</span>
                                <span className="description">Read FAQs</span>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="#">
                                <span className="number">3</span>
                                <span className="description">Make payment</span>
                            </a>
                        </div>
                    </div>
                    <div className="message">
                        <img src={messageIcon} className="message" alt="messageIcon"/>
                        <p>
                            Questions you might have.
                        </p>
                    </div>
                    <div className="message-text">
                        We 've answered a list of expected questions
                        you may have as we get started together
                    </div>
                               
                </>
    }
        
    return (
        <div className="container-fluid">
            <div className="row logo-bar">
                <div className = {`${logoClass}`}>
                    <img src={logo} alt="everpost logo"/>
                </div>
                <div className = "col-md-6 second-bar">
                    {text}
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-6 skip-button">
                            {button}
                        </div>
                        <div className={`${stripeClass}`}>
                            <button className="power">
                                <span>Powered by <p>stripe</p></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
