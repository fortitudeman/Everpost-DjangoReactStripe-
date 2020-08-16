import React from 'react';
import './CardInfo.css';
import visa from '../../images/visa.png';
import master from '../../images/master.png';
import amex from '../../images/amex.png';
import circlepay from '../../images/circlepay.png';
import card135 from '../../images/card135.png';

const CardInfo = () => {
    return (
        <div className="form-group">
            <label className="card-label">Card Information</label>
            <table className="cardinfo">
                <tbody>
                    <tr>
                        <td colSpan="2" className="number-td">
                            <input type="text" name="cardnumber" className="number" placeholder="1234 1234 1234 1234"/>
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
                            <input type="text" name="expired" className="expired" placeholder="MM / YY" />
                        </td>
                        <td className="cvc-td">
                            <input type="text" name="cvc" className="cvc" placeholder="CVC"/>
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