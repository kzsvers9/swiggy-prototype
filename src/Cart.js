import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, removeItemFromCart } from "./redux/Cart/Cart.actions";
import {
  cartSelector,
  cartItemsSelector,
  cartTotalPriceSelector,
  cartIsEmptySelector,
} from "./redux/Cart/Cart.selectors";

function Cart() {
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(cartItemsSelector);
  const cartList = Object.values(cartItems).map((item, index) => (
    <li key={index} className="cart-item">
      <div className="cart-item-info">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">₹{item.price.toFixed(2)}</div>
      </div>
      <div className="cart-item-quantity">
        <span>{item.quantity}</span>
      </div>
      <button
        className="remove-btn"
        onClick={() => dispatch(removeItemFromCart(item))}
      >
        x
      </button>
    </li>
  ));

  const totalPrice = useSelector(cartTotalPriceSelector);

  const handleCheckout = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(cart),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        const simplifiedCartList = Object.values(cartItems).map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        }));

        const orderInfo = {
          items: simplifiedCartList,
          total: totalPrice,
        };
        localStorage.setItem("orderInfo", JSON.stringify(orderInfo));
        alert("Your order has been placed!");
        navigate("/thank-you");
      })
      .catch((error) => console.error(error));
    dispatch(clearCart());
  };

  const cartIsEmpty = useSelector(cartIsEmptySelector);

  return (
    <div className="cart">
      {cartIsEmpty ? (
        <div className="cart-empty">
          <div className="cart-heading">Cart Empty</div>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
            className="cart-empty-img"
            alt="Cart Empty"
          />
          <div className="cart-desc">
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </div>
        </div>
      ) : (
        <div>
          <div className="cart-heading">Cart</div>
          <ul className="cart-items">{cartList}</ul>
          <div className="cart-total">
            Total: <span className="cart-total-price">₹{totalPrice}</span>
          </div>
          <button className="cart-checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
