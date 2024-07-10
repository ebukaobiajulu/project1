import React, { useState } from "react";
import data_product from "../../assets/data";
import { Link } from "react-router-dom";

const AddToCartButton = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>My Shop</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
};

const ProductList = ({ addToCart }) => {
  return (
    <div>
      {data_product.map((product) => (
        <div key={product.id}>
          <h2>{product.productName}</h2>
          <p>${product.productPrice}</p>
          <Link to={"/mycart"}>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.productName} - ${item.productPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCartButton;
