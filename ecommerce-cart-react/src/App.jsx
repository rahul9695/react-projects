import { useState } from "react";
import "./App.css";
import ProductCard from "./Components/ProductCard.jsx";
import productData from "./data.json";

function App() {

  // let totalP = productData.reduce((total, obj) => { return total += obj.itemPrice},0);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function updateCart(type) {
    if(type === "INCREASE") setTotalQuantity(totalQuantity + 1);
    else if(type === "DECREASE") setTotalQuantity(totalQuantity - 1);
  }

  function updateTotalPrice(type, price) {
    if(type === "INCREASE") setTotalPrice(totalPrice + price);
    else if(type === "DECREASE") setTotalPrice(totalPrice - price);
  }

  return (
    <div className="App">
      <header>
        <nav>
          <h1>Ecommerce cart</h1>
          <div className="cart_icon_badge">
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
            <span>
              <p>{totalQuantity}</p>
            </span>
          </div>
        </nav>
      </header>
      <div className="main_wrapper">
        <h2>Your Bag</h2>
        <div className="product_cards_wrapper">
          {productData.map((product) => {
            return <ProductCard
              key={product.id}
              productObj={product}
              updateCartFn={updateCart}
              updateTotalPrice = {updateTotalPrice}
            />
          })}
        </div>
        <hr />
        <div className="total_price_wrapper">
          <span>Total</span>
          <span className="total_price">${totalPrice.toFixed(2)}</span>
        </div>
        <p className="clear_chat">Clear Cart</p>
      </div>
    </div>
  );
}

export default App;
