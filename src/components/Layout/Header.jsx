import React from "react";

import MealsImg from "../../assets/meals.jpg";
import CartIcon from "../Cart/CartIcon";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Foodie</h1>
        <button className={classes.button}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>2</span>
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="" />
      </div>
    </>
  );
};

export default Header;
