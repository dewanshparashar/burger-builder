import React from "react";
import classes from "./Logo.css";
import burgerLogoPath from "./../../../assets/burger-logo.png";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogoPath} alt="Yumm Burger Co." />
    </div>
  );
};

export default Logo;
