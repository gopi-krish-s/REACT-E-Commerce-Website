import Header from "./Header";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


const Cart = ({ cartItems }) => {
  

   
  const handleSubmit = () => {
    if (totalPrice === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_test_0PGPHfxMPmveFJ",
        key_secret: "XAdQa3FVkpCygNbSs5j2L66K",
        amount: totalPrice * 100,
        currency: "INR",
        name: "BUY_PRODUCTS",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "GopiKrishnan",
          email: "sggopi20@gmail.com",
          contact: "7904425033",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Header />
      <h2 className="head-cart">Cart</h2>
      {/* <div>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - ${item.price}
            </p>
          </div>
        ))}
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div> */}
      <div>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Name</th>
              
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="item-name">{item.name}</td>
                
                <td className="item-price">${item.price.toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td className="total">Total:</td>
              <td className="total-price">${totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="cart-button-new" onClick={handleSubmit}>
        {" "}
        BUY{" "}
      </button>
    </>
  );
};
 
export default Cart;

