import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import LikeImg from "../../assets/like.png";
import Ratings from "../../assets/rating.png";
import "./products.css";

const ProductCard = (props) => {
  const {product} = props

  const {addToCart} = useContext(ShopContext)

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
          <button className="addtocart-btn" onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
