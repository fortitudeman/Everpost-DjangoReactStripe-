import React, { useState, useEffect } from 'react';
import './CardInfo.css';
import visa from '../../images/visa.png';
import master from '../../images/master.png';
import amex from '../../images/amex.png';
import circlepay from '../../images/circlepay.png';
import card135 from '../../images/card135.png';
import $ from 'jquery';


const CardInfo = (props) => {

    const { handleChange, number } = props
    useEffect (() => {

        $( "input[name='number']" ).on('keypress change', 
            function () {
                $(this).val(function (index, value) {
                    // debugger
                    return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
                });
            });
        $( "input[name='expired']" ).on('keypress change', 
            function () {
                $(this).val(function (index, value) {
                    if (value.length == 5) return value
                    else 
                        return value.replace(/\W/gi, '').replace(/(.{2})/g, '$1/');
                });
            });
    })
    return (
        <div className="form-group">
            <label className="card-label">Card Information</label>
            <table className="cardinfo">
                <tbody>
                    <tr>
                        <td colSpan="2" className="number-td">
                            <input 
                                type="text" 
                                name="number" 
                                value={number} 
                                className="number" 
                                placeholder="1234 1234 1234 1234"
                                onChange = {handleChange} />
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
                            <input 
                                type="text" 
                                name="expired"  
                                className="expired" 
                                placeholder="MM / YY" 
                                onChange = {handleChange}
                            />
                        </td>
                        <td className="cvc-td">
                            <input 
                                type="text" 
                                name="cvc" 
                                className="cvc" 
                                placeholder="CVC"
                                onChange = {handleChange} 
                            />
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