import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Collections from "./components/Collections";
import Featuers from "./components/Featuers";
import Products from "./components/Products";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="shop">
        <Shop />
      </div>

      <Collections />

      <div id="features">
        <Featuers />
      </div>

      <div id="products">
        <Products />
      </div>

      <div id="review">
        <Review />
      </div>

      <Footer />
    </div>
  );
};

export default App;
