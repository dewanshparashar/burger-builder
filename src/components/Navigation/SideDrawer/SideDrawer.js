import React from "react";
import Logo from "./../../UI/Logo/Logo.js";
import NavigationItems from "./../NavigationItems/NavigationItems.js";
import classes from "./SideDrawer.css";
import Aux from "../../../hoc/Aux/Aux.js";
import Backdrop from "./../../UI/Backdrop/Backdrop.js";

const Sidedrawer = (props) => {
  const attachedClasses = [
    classes.SideDrawer,
    props.open ? classes.Open : classes.Close,
  ];
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo></Logo>
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default Sidedrawer;
