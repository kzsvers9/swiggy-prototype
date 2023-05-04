import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoodItems } from "./redux/Fooditems/Food.actions";
import { fetchNavItems } from "./redux/NavItems/Nav.actions";
import { fetchListItems } from "./redux/listItems/List.actions";
import { foodItemsSelector } from "./redux/Fooditems/Food.selectors";
import { listItemsSelector } from "./redux/listItems/List.selectors";
import { navItemsSelector } from "./redux/NavItems/Nav.selectors";
import Food from "./Food";
import MainList from "./MainList";
import MainNavbar from "./MainNavbar";
import Cart from "./Cart";
function Main() {
  const foodItems = useSelector(foodItemsSelector);
  const navItems = useSelector(navItemsSelector);
  const listItems = useSelector(listItemsSelector);
  const [showVegOnly, setShowVegOnly] = useState(false);
  let vegClass = "veg-txt ";
  if (showVegOnly) vegClass += "vegclicked";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNavItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchListItems());
  }, [dispatch]);

  const toggleVegOnly = () => {
    setShowVegOnly((previousState) => !previousState);
  };

  const renderFoodItems = () => {
    if (foodItems.length === 0) return null;
    const filteredFoodItems = showVegOnly
      ? foodItems.filter((food) => food.veg)
      : foodItems;
    return filteredFoodItems.map((food, index) => (
      <Food
        key={index}
        name={food.name}
        image={food.image}
        description={food.description}
        price={food.price}
      />
    ));
  };
  const rendernavItems = () => {
    if (navItems.length === 0) return null;
    return navItems.map((nv, index) => (
      <MainNavbar key={index} className={nv.className} navtext={nv.navtext} />
    ));
  };
  const renderlistItems = () => {
    if (listItems.length === 0) return null;
    return listItems.map((lt, index) => (
      <MainList key={index} classname={lt.className} listtext={lt.text} />
    ));
  };

  const resInfo = () => {
    return (
      <div className="res-info">
        <div className="res-ctd">
          <div className="res-img">
            <img
              className="_2tuBw _12_oN _3sCWI"
              width="254"
              height="165"
              alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y2y8vkvvgpdu4nkxx5uj"
            />
          </div>
          <div className="description">
            <div className="res-desc">
              <div className="res-name">
                <h1 title="Kitchens of Punjab">Kitchens of Punjab</h1>
              </div>
              <div className="res-about">
                <div className="available">Punjabi, North Indian</div>
                <div className="add">
                  Bilekahalli, Bannerghatta Main Road | Change Outlet
                </div>
                <div className="card-footer">
                  <div className="footer-itm">
                    <div className="d1"> 4.01</div>
                    <div className="d2">500+ Ratings</div>
                  </div>
                  <div className="footer-itm">
                    <div className="d1">Unserviceable</div>
                    <div className="d2">Check Back Later</div>
                  </div>
                  <div className="footer-itm">
                    <div className="d1">₹ 500</div>
                    <div className="d2">Cost for two</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offer">
            <div className="offer-container">
              <div className="offer-head">OFFER</div>
              <div className="offer-ctd">
                <div className="dis1">
                  <span className="icon1"></span>
                  <div className="dis1-ctd">
                    FLAT200 off | Use SWIGGIESTDEAL
                  </div>
                </div>
                <div className="disc2">
                  <span className="icon2"></span>
                  <div className="dis2-ctd">
                    20% off up to ₹120 | Use FEDERALCC Above ₹249
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const sort = () => {
    return (
      <div className="sort">
        <div className="sort-wrap">
          <div className="sort-ctd">
            <div className="fav">
              <span className="heart-logo"></span>
              <span className="fav-txt">Favourite</span>
            </div>
            <div className="veg" onClick={toggleVegOnly}>
              <span className="square-logo"></span>
              <span className={vegClass}>Veg Only</span>
            </div>

            <div className="search-dish">
              <span className="search-logo">
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
              </span>
              <span className="search-txt">
                <input
                  type="text"
                  className="search-inp"
                  placeholder="Search for dishes..."
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const recommended = () => {
    return (
      <div className="recommended">
        <h2 className="rcd">Recommended</h2>
        <div className="item-no">21 ITEMS</div>
        <div className="food-items">{renderFoodItems()}</div>
      </div>
    );
  };
  const renderCart = () => {
    return <Cart />;
  };
  const mainContent = () => {
    return (
      <div className="mainn-content">
        <div className="mainn-navbar">{rendernavItems()}</div>
        <div className="restaurant-card">
          {resInfo()}
          {sort()}
        </div>
        <div className="restaurant-menu">
          <div className="menu-wrap">
            <div className="list-wrap">
              <div className="menu-list">{renderlistItems()}</div>
            </div>
            <div className="menu-items">{recommended()}</div>
          </div>
          <div className="cart-empty">{renderCart()}</div>
        </div>
      </div>
    );
  };

  return <main className="mainn">{mainContent()}</main>;
}

export default Main;
