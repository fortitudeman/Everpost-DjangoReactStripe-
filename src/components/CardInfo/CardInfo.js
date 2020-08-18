import React from 'react';
import './CardInfo.css';
import visa from '../../images/visa.png';
import master from '../../images/master.png';
import amex from '../../images/amex.png';
import circlepay from '../../images/circlepay.png';
import card135 from '../../images/card135.png';

import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
} from '../index';


const CardInfo =(props) => {

    const { handleChange, number } = props

    return (
        <div className="form-group">
            <label className="card-label">Card Information</label>
            <table className="cardinfo">
                <tbody>
                    <tr>
                        <td colSpan="2" className="number-td"
                                onChange={handleChange}>
                            <CardNumberElement/>
                        </td>
                        <td className="card-logo">
                            <div>
                                <img src={circlepay} />
                                <img src={amex} />
                                <img src={master} />
                                <img src={visa} />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="expired-td">
                            <CardExpiryElement/>
                        </td>
                        <td className="cvc-td">
                            <CardCvcElement />
                        </td>
                        <td className="cvclogo">
                            <div>
                                <img src={card135} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>   
                           
        </div>
    )
}
export default CardInfo;