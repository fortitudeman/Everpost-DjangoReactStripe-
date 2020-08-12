import React from 'react';
import './PostHeader.css';
import logo from '../../images/logo.png';

export default function PostHeader() {
    return (
        <div className="container-fluid">
            <div className="row logo-bar">
                <div className = "col-md-3 ever-logo">
                    <img src={logo} alt="everpost logo"/>
                </div>
                <div className = "col-md-6 title">
                    <p>
                        So, you're going with Everpost<br />
                        <span>Complete Post.</span> 
                        Awesome.
                    </p>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-6 skip-button">
                            <button className='skip'>
                                <span>Skip to payment</span>
                            </button>
                        </div>
                        <div className="col-md-6 stripe-logo">
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
