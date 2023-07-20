import Header from "./Header";
import image from "./Resources/1687478664-61dFmUtonHL.jpg"
import watch from "./Resources/1665435735-apple-watch-series-8-1665435720.jpg";
import battery from "./Resources/1668524695-anker-battery-pack-1668524678.jpg";
import earbuds from "./Resources/1682697165-soundcore-earbuds-644bebb7689d2.jpg";
import speaker from "./Resources/1682699837-house-of-marley-speaker-644bf62d05fb0.jpg";
import watch1e from "./Resources/1682703454-1682622132-1682622036-fossil-hybrid-smartwatch-644ac5e9e4542.jpg";
import React from "react";




const Home = ({ handleAddToCart }) => {
 
  return (
    <div className="card-container">
      <Header />
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt="image" className="title" />
            <h2>Sony neckbands</h2>
          </div>
          <div className="flip-card-back">
            <p className="title">Sony WI-C100 Wireless Neckband Earbuds</p>

            <button
              className="cart-button"
              onClick={() =>
                handleAddToCart("Sony WI-C100 Wireless Neckband Earbuds", 49.99)
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={watch} alt="image" className="title" />
            <h2>Apple watch</h2>
          </div>
          <div className="flip-card-back">
            <p className="title">Apple Apple Watch Series 8</p>
            <button
              className="cart-button"
              onClick={() =>
                handleAddToCart("Apple Apple Watch Series 8", 79.99)
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flip-card-new">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={battery} alt="image" className="title" />
            <h2>Anker PowerBank</h2>
          </div>
          <div className="flip-card-back">
            <p className="title">Anker 737 Power Bank</p>
            <button
              className="cart-button"
              onClick={() => handleAddToCart("Anker 737 Power Bank", 39.99)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flip-card-new1">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={watch1e} alt="image" className="title" />
            <h2>Fossil smartwatch</h2>
          </div>
          <div className="flip-card-back">
            <p className="title">Fossil Neutra Gen 6 Hybrid Smartwatch</p>
            <button
              className="cart-button"
              onClick={() =>
                handleAddToCart("Fossil Neutra Gen 6 Hybrid Smartwatch", 40)
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flip-card-fresh">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={earbuds} alt="image" className="title" />
            <h2>Wireless Earbuds</h2>
          </div>
          <div className="flip-card-back">
            <p className="title">Soundcore Life Note 3S Wireless Earbuds</p>
            <button
              className="cart-button"
              onClick={() =>
                handleAddToCart(
                  "Soundcore Life Note 3S Wireless Earbuds",
                  48.43
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flip-card-fresh1">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={speaker} alt="image" className="title" />
            <h2>Mini Bluetooth Speaker</h2>
          </div>
          <div className="flip-card-back">
            <p className="title">
              House of Marley Get Together 2 Mini Bluetooth Speaker
            </p>
            <button
              className="cart-button"
              onClick={() =>
                handleAddToCart(
                  "House of Marley Get Together 2 Mini Bluetooth Speaker",
                  129.99
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* <Cart cartItems={cart} /> */}
    </div>
  );
};
 
export default Home;