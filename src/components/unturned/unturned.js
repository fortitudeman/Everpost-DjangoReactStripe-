import React from 'react'
import pencilIcon from '../../images/icon2.png'
import './unturned.css';
import arrowIcon from '../../images/arrowicon.png';
import tickIcon from '../../images/icon3.png';

const Unturned = () => {
    return (
        <div className="row unturned">
            <div className="col-md-4 col-sm-2 col-xs-1"></div>
            <div className="col-md-4 col-sm-8 col-xs-10">
                <img src={pencilIcon} className="pencil" alt="pencilIcon"/>
                <h2>
                    No stone unturned.
                </h2>
                <p className="explain">
                    Feel free to &nbsp;
                    <a href="#">
                        <u>reach out </u>
                        <img src={arrowIcon} alt = "arrow" width="15px"/>
                    </a>
                        &nbsp;to us with any questions
                    you have which haven't been answered here.
                </p>
                <div>
                    <img src={tickIcon} alt=""></img>
                    <h4>
                        If not, we're all set.
                    </h4>
                </div>
                
            </div>
            <div className="col-md-4 col-sm-2 col-xs-1"></div>
        </div>
    )
}
export default Unturned;