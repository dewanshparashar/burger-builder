import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "./../../UI/Button/Button.js";

class OrderSummary extends Component {
  //this can be a functional component. No need for class based
  componentDidUpdate() {
    console.log("Order Summary updated...");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your order</h3>
        <b>Your yummy burger has following ingredients: </b>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price : ${this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
