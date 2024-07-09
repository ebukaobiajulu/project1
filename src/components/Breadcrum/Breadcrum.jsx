 import React, {useContext} from "react";
 import { Link } from "react-router-dom";
 import { ShopContext } from "../../Context/ShopContext";
 import colors from "../../assets/colors.png"
 import Ratings from "../../assets/rating.png";
 import LikeImg from "../../assets/like2.png";
 import "./breadcrum.css"

 const Breadcrum = (props) => {
    const {product} = props
    
    const {addToCart} = useContext(ShopContext)

    return (
        <div className="product-details-main">
          <div className="container">
            <div className="page-navigation">
                <Link to={"/"}><p>Products</p></Link>/{product.productName}
            </div>
            <div className="grid-display">
              <div className="left">
                 <img src={product.image} alt="" className="product-image" onClick={window.scrollTo(0,0)}/>     
                 <img src={LikeImg} alt="" className="like-image"/>          
              </div>
              <div className="right">
              <h2>{product.productName}</h2>
              <div style={{display: "flex", alignItems: "center" , justifyContent: "space-between"}}>
                  <p className="product-price">${product.productPrice}</p>
                  <div className="reviews">
            <img src={Ratings} alt="" />
            <p>{product.review}</p>
          </div>
              </div>
                <p style={{ color: "#737584", paddingBottom: "1.5rem" }}>
                  the ultimate in luxury Audio. These over-ear headphones boast an
                  Apple-designed dynamic driver for high-fidelity sound, Active
                  Noise Cancellation, and a comfortable knit mesh canopy with memory
                  foam ear cushions. With seamless Apple device integration via the
                  H1 chip, up to 20 hours of battery life, and features like
                  Transparency mode and spatial audio, the AirPods Max delivers an
                  exceptional listening experience in style.
                </p>
                <hr />
                <div className="color-choice">
                  <p style={{marginBottom: "0.625rem"}}>Selected Colour: <span style={{color: "#737584"}}>Black</span></p>
                  <img src={colors} alt="color choice" className="color" />
                </div>
                <hr />
                <div className="buttons">
                  <button>Buy Now</button>
                  <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
 }
 export default Breadcrum