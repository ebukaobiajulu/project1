import React from "react";
import ProductCard from "../Products/ProductCard";
import "./menu.css";
import data_product from "../../assets/data";

const Menu = () => {
  return (
    <div>
      <div className="container main-col">
        {data_product.map((item, i) => {
          return (
            <div className="product-col">
              <ProductCard
                key={i}
                id={item.id}
                productName={item.productName}
                productPrice={item.productPrice}
                description={item.description}
                review={item.review}
                image={item.image}
              />
            </div>
          );
        })}
        
      </div>
    </div>
  );
};
export default Menu;
