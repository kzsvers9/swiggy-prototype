import React, { useEffect, useState } from 'react'
// import menu from './menu.json'
import Food from './Food'
import MainList from './MainList';
import MainNavbar from './MainNavbar';
function Main() {

  const [foodItems, setFoodItems] = useState([]);
  const [navItems, setnavItems] = useState([]);
  const [listItems, setlistItems] = useState([]);
  
  useEffect(() => {
      fetch('menu.json')
      // .then(response => console.log(response))
        .then(response => response.json())
        // .then(data => console.log(data));
        .then(data => setFoodItems(data.items));
  }, []);

  useEffect(() => {
    fetch('navbar.json')
      .then(response => response.json())
      .then(data => setnavItems(data));
}, []);

useEffect(() => {
  fetch('mainlist.json')
    .then(response => response.json())
    .then(data => setlistItems(data));
}, []);
      
const renderFoodItems = () => {
  if(foodItems.length === 0) return null;
  return foodItems.map((food, index) => (
    <Food  key= {index} name={food.name} image={food.image} description={food.description} price={food.price}/>
  ))
}
const rendernavItems = () => {
  if(navItems.length === 0) return null;
  return navItems.map((nv, index) => (
    <MainNavbar key={index} className={nv.className} navtext={nv.navtext} />
  ))
}
const renderlistItems = () => {
  if(listItems.length === 0) return null;
  return listItems.map((lt, index) => (
    <MainList key={index} classname={lt.className} listtext={lt.text} />
  ))
}

const resInfo = () =>{
  return(
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
                <h1 title="Kitchens of Punjab">
                  Kitchens of Punjab
                </h1>
              </div>
           <div className="res-about">
              <div className="available">
                Punjabi, North Indian
              </div>
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
              <div className="dis1-ctd">FLAT200 off | Use SWIGGIESTDEAL
              </div>
            </div>
            <div className="disc2">
              <span className="icon2"></span>
              <div className="dis2-ctd">20% off up to ₹120 | Use FEDERALCC Above ₹249</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
const sort = () =>{
  return(
    <div className="sort">
    <div className="sort-wrap">
      <div className="sort-ctd">
        <div className="fav">
          <span className="heart-logo"></span>
          <span className="fav-txt">Favourite</span>
        </div>
        <div className="veg">
          <span className="square-logo"></span>
          <span className="veg-txt">Veg Only</span>
        </div>
       
        <div className="search-dish">
          <span className="search-logo">
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </span>
          <span className="search-txt">
            <input type="text" className="search-inp" placeholder="Search for dishes..." />
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

const recommended = () =>{
  return(
    <div className="recommended">
    <h2 className="rcd">Recommended</h2>
    <div className="item-no">21 ITEMS</div>
    <div className="food-items">
    {/* {foodItems.length > 0 && foodItems.map(food => (
<Food  key= {food.name} name={food.name} image={food.image} description={food.description} price={food.price}/>

))} */}
{renderFoodItems()}
      <div className="item-card">
        <div className="food-ctd">
          <div className="food-desc">
            <div className="green-logo">
            <i className="styles_icon__m6Ujp styles_itemIcon__1LXTw icon-Veg styles_iconVeg__shLxJ" role="presentation" style={{lineHeight: '1.2'}} aria-hidden="true"/>
            </div>
            <div className="food-title">
              <h3 className="heading-food">Premium Paneer Butter Masala  Roti Thali</h3>
            </div>
            <div className="food-price">
              <span className="fd-price"> &#8377; 341</span>
            </div>
            <div className="food-igd">
              Paneer butter masala , 2 nos roti , 2 pcs paneer tikka served with pickle , raita ,gulab jamun , green chutney & salad
            </div>
          </div>
          <div className="food-imgwrap">
          <div className="food-img"> 
          <img alt="Premium Paneer Butter Masala Roti Thali" className="styles_itemImage__3CsDL" loading="lazy" width={256} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jclmnueykpjky5w4fgje" />
          </div> 
          <div className="addbtn-wrap">
             <div className="addbtn">
              <div className="addctd">ADD</div>
             </div>
          </div>
          </div>
        </div>
        <div className="item-bdr"></div>
      </div>
      <div className="item-card">
        <div className="food-ctd">
          <div className="food-desc">
            <div className="green-logo">
            <i className="styles_icon__m6Ujp styles_itemIcon__1LXTw icon-Veg styles_iconVeg__shLxJ" role="presentation" style={{lineHeight: '1.2'}} aria-hidden="true"/>
            </div>
            <div className="food-title">
              <h3 className="heading-food">Premium Paneer Butter Masala  Roti Thali</h3>
            </div>
            <div className="food-price">
              <span className="fd-price"> &#8377; 341</span>
            </div>
            <div className="food-igd">
              Paneer butter masala , 2 nos roti , 2 pcs paneer tikka served with pickle , raita ,gulab jamun , green chutney & salad
            </div>
          </div>
          <div className="food-imgwrap">
          <div className="food-img"> 
          <img alt="Premium Paneer Butter Masala Roti Thali" className="styles_itemImage__3CsDL" loading="lazy" width={256} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jclmnueykpjky5w4fgje" />
          </div> 
          <div className="addbtn-wrap">
             <div className="addbtn">
              <div className="addctd">ADD</div>
             </div>
          </div>
          </div>
        </div>
        <div className="item-bdr"></div>
      </div> 
    </div>
  </div>
  )
}
const cart = () =>{
  return(
    <div className="cart">
        <div className="cart-heading">Cart Empty</div>
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" className="_3mSQq"/>
        <div className="cart-desc">Good food is always cooking! Go ahead, order some yummy items from the menu.</div>
      </div>
  )
}
const mainContent = () =>{  return(
  <div className="mainn-content">
  <div className="mainn-navbar">
    {rendernavItems()}
    
    {/* <span className="text">Home</span>
    <span className="slash">/</span>
    <span className="text">Bangalore</span>
    <span className="slash">/</span>
    <span className="text">Bannerghatta Main Road</span>
    <span className="slash">/</span>
    <span className="high-text">Kitchens of Punjab</span> */}
  </div>
  <div className="restaurant-card">
    {resInfo()}
    {sort()}

  </div>
  <div className="restaurant-menu">
    <div className="menu-wrap">
      <div className="list-wrap">
      <div className="menu-list">
        {renderlistItems()}
 
      </div>
    </div>
    <div className="menu-items">
      {recommended()}
     
    </div>
  </div>
    <div className="cart-empty">
      {cart()}
    </div>
  
  </div>
</div>)
};

  return (
    
    <main className="mainn">
      {mainContent()}
  </main>
  )
}

export default Main