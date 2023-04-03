

import React, { useState } from 'react';

function Food(props) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    addToCart();
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      removeFromCart();
    }
  };

  const addToCart = () => {
    const item = {
      name: props.name,
      price: props.price,
      image: props.image,
      count: count + 1,
    };
    props.addToCart(item);
  };

  const removeFromCart = () => {
    const item = {
      name: props.name,
      price: props.price,
      image: props.image,
      count: count - 1,
    };
    props.removeFromCart(item);
  };

  const handleAddToCart = () => {
    addToCart();
    setCount(count + 1);
  };

  return (
    <div key={props.name} className="item-card">
      <div className="food-ctd">
        <div className="food-desc">
          <div className="green-logo">
            <i
              className="styles_icon_m6Ujp styles_itemIcon1LXTw icon-Veg styles_iconVeg_shLxJ"
              role="presentation"
              style={{ lineHeight: '1.2' }}
              aria-hidden="true"
            />
          </div>
          <div className="food-title">
            <h3 className="heading-food">{props.name}</h3>
          </div>
          <div className="food-price">
            <span className="fd-price"> ₹ {props.price}</span>
          </div>
          <div className="food-igd">{props.description}</div>
        </div>
        <div className="food-imgwrap">
          <div className="food-img">
            <img
              alt={props.name}
              className="styles_itemImage__3CsDL"
              loading="lazy"
              width={256}
              src={props.image}
            />
          </div>
         
          <div className="addbtn-wrap">
  {count === 0 ? (
    <button className="addctd addbtn" onClick={handleAddToCart}>ADD</button>
  ) : (
    <div className="addbtn">

      <button className="addctd add-minus" onClick={handleDecrement}>-</button>
      <span className="addctd add-count">{count}</span>
      <button className="addctd add-plus" onClick={handleIncrement}>+</button>
    </div>
  )}
</div>
        </div>
      </div>
      <div className="item-bdr"></div>
    </div>
  );
}

export default Food;