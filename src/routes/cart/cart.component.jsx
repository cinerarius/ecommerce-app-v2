import { useContext } from "react";

import { ReactComponent as LeftArrow } from "../../assets/arrow_left.svg";
import { ReactComponent as RightArrow } from "../../assets/arrow_right.svg";
import { ReactComponent as Remove } from "../../assets/cancel.svg";

import { CartContext } from "../../context/cart.context";

import "./cart.style.css";

const Cart = () => {
  const {
    cartItem,
    addItemsToCart,
    removeItemsFromCart,
    clearItemFromCart,
    totalCartAmount,
  } = useContext(CartContext);

  return (
    <div>
      <div className="flex justify-start mx-6 space-x-14">
        <div className="cart-header">
          <span className="header-text">Product</span>
        </div>
        <div className="cart-header">
          <span className="header-text">Description</span>
        </div>
        <div className="cart-header">
          <span className="header-text">Quantity</span>
        </div>
        <div className="cart-header">
          <span className="header-text">Price</span>
        </div>
        <div className="cart-header">
          <span className="header-text">Remove</span>
        </div>
      </div>
      <div>
        {cartItem.map((cartItem) => {
          const { id, name, imageUrl, quantity, price } = cartItem;
          return (
            <div className="cart-product-container" key={id}>
              <img className="cart-product-image" src={imageUrl} alt={name} />
              <h1 className="product-name">{name}</h1>
              <div className="product-quantity">
                <LeftArrow onClick={() => removeItemsFromCart(cartItem)} />
                <br />
                <span>{quantity}</span>
                <br />
                <RightArrow onClick={() => addItemsToCart(cartItem)} />
              </div>
              <span className="w-24">${price}</span>
              <Remove
                onClick={() => {
                  clearItemFromCart(cartItem);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="total-container">
        <span className="total">Total : ${totalCartAmount}</span>
      </div>
    </div>
  );
};

export default Cart;
