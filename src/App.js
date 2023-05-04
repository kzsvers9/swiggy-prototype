import "./App.css";
import { Routes, Route } from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import Thankyou from "./Thankyou";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
