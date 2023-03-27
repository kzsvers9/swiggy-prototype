import React from 'react'

function Food(props) {
  return (
    
     <div key={props.name} className="item-card">
          <div className="food-ctd">
            <div className="food-desc">
              <div className="green-logo">
                <i className="styles_icon_m6Ujp styles_itemIcon1LXTw icon-Veg styles_iconVeg_shLxJ" role="presentation" style={{ lineHeight: '1.2' }} aria-hidden="true" />
              </div>
              <div className="food-title">
                <h3 className="heading-food">{props.name}</h3>
              </div>
              <div className="food-price">
                <span className="fd-price">{props.price}</span>
              </div>
              <div className="food-igd">
                {props.description}
              </div>
            </div>
            <div className="food-imgwrap">
              <div className="food-img">
                <img alt={props.name} className="styles_itemImage__3CsDL" loading="lazy" width={256} src={props.image} />
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
  )
}

export default Food