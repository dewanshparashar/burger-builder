import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux/Aux.js";
import Backdrop from "./../Backdrop/Backdrop.js";

class Modal extends Component {
  componentDidUpdate() {
    console.log("Modal did update..");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //only update the component IF the "show" property has changed
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        ></Backdrop>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? 1 : 0,
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
