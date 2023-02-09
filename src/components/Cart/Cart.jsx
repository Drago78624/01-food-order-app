import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css"

const Cart = (props) => {
    const cartItems = [{id: "c1", name: "biryani", amount: "2", price:"240.00"}].map(cartItem => {
        <li>{cartItem.name}</li>
    })

  return (
    <Modal>
      <ul>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>69.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.showModal}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
