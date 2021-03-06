import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem.js";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem exact link="/orders">
        Orders
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
