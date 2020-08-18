import React from "react";
import { notify } from 'react-notify-toast';
import { injectStripe } from "react-stripe-elements";
import CardInfo from '../CardInfo/CardInfo';
import gPay from '../../images/gPaylogo.png';
import './checkoutform.css';
import Zip from '../Zip/Zip';

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
  handleChange = (e) => {
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
  childhandleChange = e => {
    console.log(e)
    // this.setState({
    //   [e.target.name]:e.target.value
    // });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ card_errors: "", resp_message: "" });
    return this.props.stripe
      .createToken({
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
          <button className="form-btn">Subscribe</button>
        </form>
      </div>
    );
  }
}
export default injectStripe(CheckoutForm);
