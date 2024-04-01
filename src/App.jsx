import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Collections from "./components/Collections";
import Featuers from "./components/Featuers";
import Products from "./components/Products";
import Review from "./components/Review";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Provider store={store}>
        <Navbar setShowCart={setShowCart} />

        {showCart && <Cart setShowCart={setShowCart} />}

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
        <Toaster position="bottom-center" reverseOrder={false} />
      </Provider>
    </div>
  );
};

export default App;
