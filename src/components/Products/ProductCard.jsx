import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../Button/AddToCartButton";
import LikeImg from "../../assets/like.png";
import Ratings from "../../assets/rating.png";
import "./products.css";

const ProductCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="flex">
          <div className="product-images">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" className="productImage"/></Link>            
            <img src={LikeImg} alt="" className="like-icon" />
          </div>
          <div className="product-name-price flex-display">
            <h4 className="product-name-price primary-color">
              {props.productName}
            </h4>
            <p>${props.productPrice}</p>
          </div>
          <p className="product-description">{props.description}</p>
          <div className="reviews">
            <img src={Ratings} alt="" />
            <p>{props.review}</p>
          </div>
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
