import React from "react";
import classes from "./Order.css";

const Order = (props) => {
  let ingredients = [];
  ingredients = Object.keys(props.ingredients)
    .filter((igKey) => props.ingredients[igKey])
    .map((igKey) => {
      return (
        <div className={classes.IngredientChip} key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey + " "}</span>
          (x
          {props.ingredients[igKey]})
        </div>
      );
    });
  return (
    <div className={classes.Order}>
      Ingredients: {ingredients}
      <p>
        Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
