import React from 'react'
import './integration.css'
import logo from '../images/logo.png'
import video from '../images/image3.png'
import messageIcon from '../images/icon1.png';
import pencilIcon from '../images/icon2.png';
import image1 from '../images/image1.png';
import CardForm from '../components/card-form'

import image2 from '../images/img2.png';
import logostripe from '../images/logostripe.png';

const Integration = () => {
    return (
        <div className="container-fuild">
            <div className="post">
                <div className="row" >
                    <div className="bar">
                        <img src={logo} className="logo" alt="everpost logo"/>
                        <button className="btn pull-right skip">
                            Skip to payment
                        </button>
                        <img src={logostripe} alt="stripelogo" className="logostripe pull-right" width="10%"/>
                    </div>
                    <div className="text">
                        <p style={{fontSize:"4.5rem"}}>
                            <span>
                                So, you're going with Everpost 
                            </span>
                            <span>
                                <span className="underline">Complete Post</span>. Awesome.
                            </span>
                        </p>
                    </div>
                    <div className="text">
                        <nav style={{fontSize:"2rem"}}>
                            <a href="#" className="link"><span className="number">1</span>Watch what's next?</a>
                            <a href="#" className="link"><span className="number">2</span>Read FAQs</a>
                            <a href="#" className="link"><span className="number">3</span>Make payment</a>
                        </nav>
                        
                    </div>
                    <div >
                        <img src={video} className="video" alt="introduction" />
                    </div>
                    <div className="bar">
                        <div className="pull-left">
                        <img src={logo} className="logo" alt="logo"/>
                        </div>
                        <div className="pull-right">
                            <button className="btn skip pull-right" style={{'width':'30%'}}>
                                Pay now
                            </button>
                            <img src={logostripe} alt="stripelogo" className="logostripe pull-right" width="40%"/>
                        </div>
                        <center>
                            <div className="text">
                                <nav style={{fontSize:"2rem"}}>
                                    <a href="#" className="link"><span className="number">1</span>Watch what's next?</a>
                                    <a href="#" className="link"><span className="number">2</span>Read FAQs</a>
                                    <a href="#" className="link"><span className="number">3</span>Make payment</a>
                                </nav>
                                
                            </div>
                        </center>
                        
                    </div>
                    <div >
                        <img src={messageIcon} className="message" alt="messageIcon"/>
                    </div>
                    <div className="question">
                        <h1>Questions you might have.</h1>
                    </div>
                    <div className="answer">
                        <p>
                            <span style={{fontSize:"30px"}}>
                                We 've answered a list of expected questions
                            </span>
                            <span style={{fontSize:"30px"}}>
                                you may have as we get started together
                            </span>
                        </p>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-md-6">
                        <div className="row" style={{marginTop: "100px"}}>
                            <div className="card pull-right left" >
                                <div className="card-header">
                                    <div className="sup">Q</div>
                                    <div className="content">
                                    What type of support does Everpost Complete Post provide?
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="sup-content">A</div>
                                    <div className="content">
                                            We provide direct chat support throughout the 
                                        process*; that's the only that way we can keep
                                        prices low and offer. However, we do provide you
                                        with free critical updates and access.
                                        
                                    </div>
                                </div>
                                <div className="card-footer content">
                                    *All refunds are made within standard 60 day terms
                                </div>
                            </div>
                            <div className="circle" style={ { "float":"right" }}>
                            </div>
                        </div>
                        <div className="row cardRow">
                            <div className="card pull-right left"  style={{"marginRight":"50px"}}>
                                <div className="card-header">
                                    <div className="sup">Q</div>
                                    <div className="content">
                                        What is your refund policy?
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="sup-content">A</div>
                                    <div className="content">
                                        Due to the nature of our product, we 're currently
                                    unable to offer a refund.
                                    You're buying Everpost 
                                    as is, so be sure to check the requirements* for
                                    WordPress before you purchase.
                                    </div>
                                </div>
                            </div>
                            <div className="circle" style={ { "float":"right" }}>
                            </div>
                        </div>
                        <div className="row cardRow">
                            <div className="card pull-right left"  style={{"marginRight":"50px"}}>
                                <div className="card-header">
                                    <div className="sup">Q</div>
                                    <div className="content">
                                        What type of support does Everpost
                                        Complete Post provide?
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="sup-content">A</div>
                                    <div className="content">
                                        We provide direct chat support throughout the
                                        process; that's the only that way we can keep
                                        prices low and offer However, we do provide you
                                        with free critical updates and access
                                    </div>
                                </div>
                            </div>
                            <div className="circle" style={ { "float":"right" }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{marginTop:"100px"}}>
                            <div className="card pull-left right" style={{marginBottom:'50px'}}>
                                <div className="card-header">
                                    <div className="sup">Q</div>
                                    <div className="content">
                                        What is your refund policy?
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="sup-content">A</div>
                                    <div className="content">
                                        Due to the nature of our product, we 're currently
                                        unable to offer a refund.
                                        You're buying Everpost 
                                        as is, so be sure to check the requirements* for
                                        WordPress before you purchase.
                                    </div>
                                </div>
                            </div>
                            <div className="circle" style={{"float": "left"}}>
                            </div>
                        </div>
                        <div>
                            <div className="cardimage pull-left ">
                                <img src={image1} className="img1" alt="group"/>
                                <div className="card-header">
                                    <div className="sup">Q</div>
                                    <div className="content">
                                        How big is the team? Do the same
                                        people work on all of my projects?
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="sup-content">A</div>
                                    <div className="content">
                                        We provide direct chat support throughout the
                                        process; that's the only that way we can keep
                                        prices low and offer However, we do provide you
                                        with free critical updates and access
                                    </div>
                                </div>
                            </div>
                            <div className="circle" style={{"float": "left"}}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <img src={pencilIcon} className="pencil" alt="pencilIcon"/>
                </div>
                <div className="row stone">
                    <h3>
                        No stone unturned.
                    </h3>
                </div>
                <div className="row description">
                    <h5>
                        Feel free to reach out to us with any questions
                    </h5>
                    
                    <h5>
                        you have which haven't been answered here.
                    </h5>
                </div>
            </div>
            <div className="pay">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail">
                            <p style={{color:'#7b7b7b'}}>
                                Subscribe to Complete Post plan
                            </p>
                            <div className="row" style={ { "marginBottom": "50px" }}>
                                <h2 className="amount">
                                    <b>$1,920.00 </b>
                                </h2>
                                <div className="period">
                                    <div style={{"textAlign":"left"}}>per</div>
                                    <div>month</div>
                                </div>
                            </div>
                            <img src={image2} width="70%" alt="group"/>
                        </div>
                        <p className="desc">Powered by <strong>stripe</strong> | Terms Privacy</p>
                    </div>
                    
                    <div className="col-md-6">
                        <CardForm />
                        <div className="term">
                            <p>
                                By confirming your subscription, you allow Everpost to charge
                            </p>
                            <p>
                                your card for this payment and future payments in accordance
                            </p>
                            <p>
                                with their terms.
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="foot">
            </div>
        </div>
    )
}

export default Integration;