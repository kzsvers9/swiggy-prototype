import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/Cart/Cart.actions";
import { cartSelector } from "./redux/Cart/Cart.selectors";

function Food(props) {
  const initial = 0;
  const [count, setCount] = useState(initial);
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const itemInCart = cart.some((item) => item.name === props.name);

  useEffect(() => {
    if (!itemInCart) {
      setCount(initial);
    }
  }, [itemInCart]);

  const handleIncrement = () => {
    setCount(count + 1);
    addToCartHandler();
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      removeFromCartHandler();
    }
  };

  const addToCartHandler = () => {
    const item = {
      name: props.name,
      price: props.price,
      image: props.image,
    };
    dispatch(addToCart(item));
  };

  const removeFromCartHandler = () => {
    const item = {
      name: props.name,
      price: props.price,
      image: props.image,
    };
    dispatch(removeFromCart(item));
  };

  const handleAddToCart = () => {
    addToCartHandler();
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
              style={{ lineHeight: "1.2" }}
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
            {!itemInCart ? (
              <>
                <button className="addctd addbtn" onClick={handleAddToCart}>
                  ADD
                </button>
              </>
            ) : (
              <div className="addbtn">
                <button className="addctd add-minus" onClick={handleDecrement}>
                  -
                </button>
                <span className="addctd add-count">{count}</span>
                <button className="addctd add-plus" onClick={handleIncrement}>
                  +
                </button>
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
