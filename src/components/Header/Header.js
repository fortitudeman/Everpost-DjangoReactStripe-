import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import powerLogo from '../../images/logostripe.png';
import powerLogo1 from '../../images/stripelogo2.png';

const Header = (props) => {
    let buttonText, headerClass, img;
    if (props.value === "pay") {
        buttonText = "Pay now"
        headerClass = "ever-logo-hidden"
        img = powerLogo1
    }
    else {
        buttonText = "Skip to payment"
        headerClass = "ever-logo"
        img = powerLogo
    } 
    return (
        <>
            <div className="small-header">
                <div className={`${headerClass}`}>
                    <img src={logo} alt = "ever logo" />
                </div>
            </div>
            <div className={`large-header clearfix ${props.value}`}>
                <div className="ever-logo">
                    <img src={logo} alt = "ever logo" />
                </div>
                <button className="skip-button">
                    {buttonText}
                </button>
                <button className="power-button">
                    <img src={img} alt="powerLogo" />
                </button>
            </div>
        </>
    )
}

export default Header;