import React from 'react'
import './Amount.css';
import logo from '../../images/img2.png';
const Amount = () => {
    return (
        <div className="amount">
            <h4>
                Subscribe to Complete Post plan
            </h4>
            <div className="amount-detail">
                <h1>$1,920.00</h1>
                <div className="per">
                    <p id="per">per</p>
                    <p>month</p>
                </div>
            </div>
            <img src={logo} alt="logo" />
        </div>
    )
}
export default Amount;