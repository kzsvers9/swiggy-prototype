import "./App.css";
import { Routes, Route } from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import Thankyou from "./Thankyou";
import Toast from "./Toast";
import { useState } from "react";




function App() {

  const [toastprop, setToastProp] = useState();
  let  toastProps = null;
  const [isToastVis, setisToastVis] = useState(false);

  const showToast = () => {
    toastProps = {
      title: 'Success',
      description: 'Order Placed Succesfully !',
      backgroundColor: '#5cb85c'
    }
    setisToastVis(true);
setToastProp(toastProps);
  }


  return (
    <>
    {isToastVis &&<Toast setisToastVis={setisToastVis} toastprops={toastprop} position="top"/> }
      <Navbar />
      <Routes>
        <Route path="/" element={<Main showToast={showToast}/>} />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
