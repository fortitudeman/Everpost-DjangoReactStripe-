import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className="row footer-bar">
            <div className="col col-md-6 col-sm-12 col-xs-12 leftwrapper">
                <h5 className="footer-left">
                    <span>Powered by <p>stripe</p></span><p className="seperate">|</p> 
                    <a>Terms</a>
                    <a>Privacy</a>
                </h5>
            </div>
            <div className="col col-md-6 col-sm-12 col-xs-12">
                <h5 className="card-explanation">By confirming your subscription, you allow Everpost to charge your card for this paymet and future payments in accordance with their terms.</h5>
            </div>
        </div>
    )
}
export default Footer;