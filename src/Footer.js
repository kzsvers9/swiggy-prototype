import React from 'react'
import  { useEffect, useState } from 'react'
import Points from './Points'

function Footer() {


  const [menulist, setmenulist] = useState([]);

  useEffect(() => {
    fetch('menulist.json')
      .then(response => response.json())
      .then(data => setmenulist(data));
  }, []);

  const renderPointImg = () => {

    return(
    <div className="points">
    <img
      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
      height="54"
      alt="Google Play Store"
    />
    <img
      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
      height="54"
      alt="App Store"
    />
  </div>
    )
  }

  const FooterContent = () => {
        
      if(menulist.length === 0) return null;

  return menulist.map(itm => (
    <Points key= {itm.title} texts={itm.texts} title={itm.title}/>
  ))
      

     

  }




  return (
    <footer className="footer">
    
      <div className="footer-content">
      {FooterContent()}
      {renderPointImg()}
    </div>
  </footer>
         
  )
}

export default Footer


