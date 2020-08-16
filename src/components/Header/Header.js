import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';


const Header = (props) => {
    let buttonText, headerClass;
    if (props.value === "pay") {
        buttonText = "Pay now"
        headerClass = "ever-logo-hidden"
    }
    else {
        buttonText = "Skip to payment"
        headerClass = "ever-logo"
        
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
                    <span>Powered by</span>
                    <span className="bold">Stripe</span>
                </button>
            </div>
        </>
    )
}

export default Header;