import React, { Component } from "react";
import Button from "./../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import axios from "./../../../axios-orders";
import Spinner from "./../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
    purchasing: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "Dewansh",
        address: {
          street: "Test street 1",
          zipCode: "201020",
          country: "India",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false, purchasing: false });
        this.props.history.push("/");
        console.log(response);
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });
        this.props.history.push("/");
        console.log(error);
      });
  };

  render() {
    let orderForm = this.state.loading ? (
      <Spinner></Spinner>
    ) : (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Your Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postalCode"
          placeholder="Your Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact details...</h4>
        {orderForm}
      </div>
    );
  }
}
export default ContactData;
