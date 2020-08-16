import React from 'react'
import './pay.css';
import Amount from '../Amount/Amount';
import DetailInfo from '../DetailInfo/DetailInfo';
import CardForm from '../CardForm/card-form';
export const Pay = () => {
    return (
        <div className="row paywrapper">
            <div className="col col-md-6 col-sm-12 col-xs-12 amountWrapper">
                <Amount />
            </div>
            <div className="col col-md-6 col-sm-12 col-xs-12 paywrapper">
                {/* <DetailInfo /> */}
                <CardForm />
            </div>
        </div>
    )
}
