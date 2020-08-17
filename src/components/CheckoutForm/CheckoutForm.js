import React from "react";
import Notifications,{ notify } from 'react-notify-toast';
import { injectStripe, CardElement } from "react-stripe-elements";
import CardInfo from '../CardInfo/CardInfo';
import gPay from '../../images/gPaylogo.png';
import './checkoutform.css';
import Zip from '../Zip/Zip';

//CheckoutForm renders the input field and a button and injects
//this.props.stripe.createToken  via props
//The token with the encrypted credit card info is sent to my backend
// So I can send it to stripe
// zip-code = 99524

class CheckoutForm extends React.Component {
  state = {
    cvc: '',
    name:'',
    resp_message: "",
    expired:'',
    expYear: '',
    expMonth: '',
    number: '',
    card_errors: "",
    formProcess: false,
    country: ""
  }
  childhandleChange = (e) => {
    let value = e.target.value;
    if (typeof(e) === "object"){
      if (e.target.name === "number")
        value = e.target.value.replace(/\s/g, "")
      this.setState({
        [e.target.name]: value
      })
    }
    else {
      this.setState({
        country: e
      })
    }
  }
  handleCardErrors = card_dets => {
    console.log("Card Section dets", card_dets);
    if (card_dets.error) {
      this.setState({ card_errors: card_dets.error.message });
    } else {
      this.setState({ card_errors: "" });
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  handleSubmit = e => {
    debugger
    e.preventDefault();
    console.log(this.state)
    console.log(this.props)
    this.setState({ card_errors: "", resp_message: "" });
    /*
    Within the context of Elements, this call to createToken knows which
    Element to tokenize, since there's only one in this group.
    */
    return this.props.stripe
      // .createToken({ type: "card", name: this.state.name })
      .createToken({
        number: this.state.number,
        cvc:this.state.cvc
      })
      .then(result => {
        debugger
        console.log(result)
        if (result.error) {
          console.log("THERE IS AN ERROR IN YOUR FORM", result.error);
          notify.show(
            result.error.message, 
            "custom", 
            3000, 
            { 
              background: 'blue', 
              text: "#FFFFFF" 
            }
          )
          return this.setState({ card_errors: result.error.message });
        } else {
          console.log(
            "Received Stripe token ---> SENDING TO SERVER: ",
            result.token
          );
          let formData = new FormData();
          formData.append("description", "CHALLENGER INTERACTIVE");
          formData.append("currency", "usd");
          formData.append("amount", 192000);
          formData.append("source", result.token.id);
          formData.append("name",result.token.card.name)
          console.log(formData, "--------formdata----------")
          debugger
          return fetch('/api/create-charge/', {
            method: "POST",
            headers: {
              accept: "application/json"
            },
            body: formData
          })
            .then(resp => resp.json())
            .then(json => this.setState({ resp_message: json.message }));
        }
      });
  };

  render() {
    return (
      <div className="stripeInfo">
        <button className="gPay">
          <img src={gPay}/>
          Pay
        </button>
        <div className="separator">
          <h4 className="sepLine"><span>Or pay with card</span></h4>
        </div>
        {this.state.resp_message && <h1>{this.state.resp_message}</h1>}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              aria-describedby="emailHelp" 
            />
          </div>
          <CardInfo 
            handleChange = { this.childhandleChange } 
            number={ this.state.number }
          />
          <div className="form-group">
            <label htmlFor="name">Name on Card</label>
            <input 
              type="text" 
              className="form-control" 
              name="name" 
              id="name" 
              onChange={this.handleChange}
            />
          </div>
          <Zip 
            handleChange = { this.childhandleChange }
          />
          {/* <div className="form-group">
            <label htmlFor="info">Card Information
              <CardElement
                className="cardElement"
                style={{
                  base: {
                    color: "#32325d",

                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: "antialiased",
                    fontSize: "16px",
                    "::placeholder": {
                      color: "#aab7c4"
                    }
                  },
                  invalid: {
                    color: "#fa755a",
                    iconColor: "#fa755a"
                  }
                }}
                id="info"
                onChange={this.handleCardErrors}
              />
              <div role="alert">
                <Notifications />
              </div>
            </label>
          </div> */}
          <button className="form-btn">Subscribe</button>
        </form>
      </div>
    );
  }
}

//The injectStripe HOC provides the this.props.stripe property
//You can call this.props.stripe.createToken within a component that has been
// injected in order to submit payment data to Stripe.
export default injectStripe(CheckoutForm);
