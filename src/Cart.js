
import React from "react";

function Cart({ cart, clearCart, removeItemFromCart }) {
  const cartItems = cart.reduce((acc, cur) => {
    if (!acc[cur.name]) {
      acc[cur.name] = {
        ...cur,
        quantity: 1
      };
    } else {
      acc[cur.name].quantity++;
    }
    return acc;
  }, {});

  const cartList = Object.values(cartItems).map((item, index) => (
    <li key={index} className="cart-item">
      <div className="cart-item-info">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">${item.price.toFixed(2)}</div>
      </div>
      <div className="cart-item-quantity">
       
        <span>{item.quantity}</span>
      </div>
      <button className="remove-btn" onClick={() => removeItemFromCart(item)}>x</button>
    </li>
  ));

  const totalPrice = Object.values(cartItems).reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(cart),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Your order has been placed!");
      })
      .catch((error) => console.error(error));
    clearCart();
  };

  return (
    <div className="cart">
      {cartList.length > 0 ? (
        <div>
          <div className="cart-heading">Cart</div>
          <ul className="cart-items">{cartList}</ul>
          <div className="cart-total">
            Total: <span className="cart-total-price">${totalPrice}</span>
          </div>
          <button className="cart-checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <div className="cart-empty">
          <div className="cart-heading">Cart Empty</div>
          <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" className="cart-empty-img" alt="Cart Empty" />
          <div className="cart-desc">Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
        </div>
      )}
    </div>
  );
}

export default Cart;