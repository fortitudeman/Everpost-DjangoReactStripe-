import React from 'react'
import './helpbar.css';
const Helpbar = () => {
    return (
        <div className="row help-row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <div className="row">
                    <div className="col-md-4 help">
                        <a href="#">
                            <span className="number">1</span>
                            <span className="description">Watch what's next?</span>
                        </a>
                    </div>
                    <div className="col-md-4 help">
                        <a href="#">
                            <span className="number">2</span>
                            <span className="description">
                            Read FAQs
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4 help">
                        <a href="#">
                            <span className="number">3</span>
                            <span className="description">Make payment</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    )
}
export default Helpbar;