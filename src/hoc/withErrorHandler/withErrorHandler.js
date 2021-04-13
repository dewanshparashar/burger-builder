import React, { Component } from "react";
import Aux from "./../Aux/Aux";
import Modal from "./../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount = () => {
      //on a request sent, clear the error
      this.requestInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });

        return req; //important
      });

      //on a faulty response, show the error
      this.responseInterceptor = axios.interceptors.response.use(
        null,
        (error) => {
          this.setState({ error: error });
          return error;
        }
      );
    };

    // remove the interceptors on unmount - avoiding memory leaks
    componentWillUnmount = () => {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.request.eject(this.responseInterceptor);
    };

    errorConfirmedHandler = () => {
      this.setState({ error: false });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
