import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
import data_product from "../../assets/data";
import "./cart-items.css";
import removeIcon from "../../assets/remove-icon.png";
import ratings from "../../assets/rating.png";

const CartItems = (props) => {
  const { product } = props;
  const { data_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart-items">
      <div className="conltainer">
        <div className="page-navigation">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          /MyCart
        </div>
        <div className="flex-display-cart">         

          {data_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div className="cart-items-left">
                  <div className="cart-items-col">
                    <div className="cart-image-container">
                      <img src={e.image} alt="" />
                      <img src="" alt="" />
                    </div>
                    <div className="cart-items-details">
                      <div>
                        <h3>{e.productName}</h3>
                        <p>${e.productPrice}</p>
                        <img src={ratings} alt="" />
                        <p></p>
                      </div>
                      <div>
                        <img src={removeIcon} alt=""onClick={()=>{removeFromCart()}} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            } 
          })}

          {data_product.map((e)=>{
            if (cartItems[e.id] > 0){
                return <div className="order-summary-right">
            <h2>Order summary</h2>
            <div className="flex-mycart">
              <p>Subtotal</p>
              <p>${e.productPrice}</p>
            </div>
            <div className="flex-mycart">
              <p>Discount</p>
              <p>$5000</p>
            </div>
            <div className="flex-mycart">
              <p>Delivery Fee</p>
              <p>Free</p>
            </div>
            <div className="flex-mycart">
              <p>Add Coupon</p>
            </div>
            <div className="flex-mycart">
              <p>Total Price</p>
              <p></p>
            </div>
            <button className="cart-button">Proceed to Checkout</button>
          </div>
            }
          })}
            

        </div>
        {/* <div className="cart-items-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <div className="cart-items-format">
                <img src="" alt="" />
                <p></p>
                <p></p>
                <button className="quantity"></button>
                <p></p>
            </div> */}
      </div>
    </div>
  );
};
export default CartItems;
