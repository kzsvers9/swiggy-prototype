import React from "react";

function Thankyou() {
  const orderInfo = JSON.parse(localStorage.getItem("orderInfo"));

  return (
    <div className="thank-you-container">
      <div className="thank-you-header">
        <h1 className="thank-you-heading">Thank you for your order!</h1>
      </div>
      <div className="thank-you-summary">
        <h2 className="thank-you-subheading">Order Summary:</h2>
        <ul className="thank-you-list">
          {orderInfo.items.map((item, index) => (
            <li key={index} className="thank-you-item">
              <span className="thank-you-item-name">{item.name}</span>
              <span className="thank-you-item-quantity">{`(${item.quantity})`}</span>
              <span className="thank-you-item-price">{`₹${item.price.toFixed(
                2
              )}`}</span>
            </li>
          ))}
        </ul>
        <p className="thank-you-total">Total Amount Paid: ₹{orderInfo.total}</p>
      </div>
    </div>
  );
}

export default Thankyou;
