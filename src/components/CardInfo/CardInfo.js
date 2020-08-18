import React, { useState, useEffect } from 'react';
import './CardInfo.css';
import visa from '../../images/visa.png';
import master from '../../images/master.png';
import amex from '../../images/amex.png';
import circlepay from '../../images/circlepay.png';
import card135 from '../../images/card135.png';
import $ from 'jquery';
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
} from '../index';


const CardInfo =(props) => {

    const { handleChange, number } = props

    const handleBlur = () => {
        console.log('[blur]');
    };
    const childhandleChange = (change) => {
        console.log('[change]', change);
    };
    const handleClick = () => {
        console.log('[click]');
    };
    const handleFocus = () => {
        console.log('[focus]');
    };
    const handleReady = () => {
        console.log('[ready]');
    };

    const createOptions = (fontSize: string, padding: ?string) => {
        return {
            style: {
                base: {
                    fontSize,
                    color: '#424770',
                    letterSpacing: '0.025em',
                    fontFamily: 'Source Code Pro, monospace',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                ...(padding ? {padding} : {}),
            },
            invalid: {
              color: '#9e2146',
            },
          },
        };
    };


    useEffect (() => {

        $( "input[name='number']" ).on('keypress change', 
            function () {
                $(this).val(function (index, value) {
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
                            <CardNumberElement
                                onBlur={handleBlur}
                                onChange={childhandleChange}
                                onFocus={handleFocus}
                                onReady={handleReady}
                                // {...createOptions(this.props.fontSize)}
                            />
                            {/* <input
                                data-stripe="number"
                                type="text" 
                                name="number" 
                                value={number} 
                                className="number" 
                                placeholder="1234 1234 1234 1234"
                                onChange = {handleChange} /> */}
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
                        <CardExpiryElement
                            onBlur={handleBlur}
                            onChange={childhandleChange}
                            onFocus={handleFocus}
                            onReady={handleReady}
                            // {...createOptions(this.props.fontSize)}
                        />
                            {/* <input 
                                data-stripe="expired"
                                type="text" 
                                name="expired"  
                                className="expired" 
                                placeholder="MM / YY" 
                                onChange = {handleChange}
                            /> */}
                        </td>
                        <td className="cvc-td">
                            <CardCvcElement
                                onBlur={handleBlur}
                                onChange={childhandleChange}
                                onFocus={handleFocus}
                                onReady={handleReady}
                                // {...createOptions(this.props.fontSize)}
                            />
                            {/* <input 
                                data-stripe="cvc"
                                type="text" 
                                name="cvc" 
                                className="cvc" 
                                placeholder="CVC"
                                onChange = {handleChange} 
                            /> */}
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