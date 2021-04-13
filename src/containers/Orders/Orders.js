import React, { Component } from "react";
import Order from "./../../components/Order/Order";
import axios from "./../../axios-orders";
import Spinner from "./../../components/UI/Spinner/Spinner";
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://react-my-burger-51618-default-rtdb.firebaseio.com/orders.json"
      )
      .then((res) => {
        //response
        console.log(res.data);
        let orders = [];
        orders = Object.keys(res.data)
          .map((orderKey) => {
            return res.data[orderKey];
          })
          .reverse();
        this.setState({ orders: orders, loading: false });
      })
      .catch((err) => {
        //error
        this.setState({ loading: false });
      });
  }

  render() {
    let orders = this.state.loading ? (
      <Spinner></Spinner>
    ) : (
      "No Orders Found..."
    );

    if (this.state.orders.length) {
      orders = this.state.orders.map((order, index) => {
        return (
          <Order
            key={index}
            ingredients={order.ingredients}
            price={order.price}
          ></Order>
        );
      });
    }

    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
