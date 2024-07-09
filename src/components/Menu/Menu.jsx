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
        {/* <div className="product-col">
            <ProductCard
              productName='AirPods Max'
              productPrice={'$' + 545.00}
              description="A perfect balance for high-fidelity audio"              
              review="(123 reviews)"
            />
        </div>
        <div className="product-col">
            <ProductCard
              productName='Beats'
              productPrice={'$' + 545.00}
              description="A perfect balance for high-fidelity audio"              
              review="(123 reviews)"
            />
        </div>
        <div className="product-col">
            <ProductCard
              productName='Soundcore Anker P20i '
              productPrice={'$' + 545.00}
              description="A perfect balance for high-fidelity audio"              
              review="(123 reviews)"
            />
        </div>
        <div className="product-col">
            <ProductCard
              productName='Apple AirPods 2'
              productPrice={'$' + 545.00}
              description="A perfect balance for high-fidelity audio"              
              review="(123 reviews)"
            />
        </div>
        <div className="product-col">
            <ProductCard
              productName='JBL Vibe 200TWS'
              productPrice={'$' + 545.00}
              description="A perfect balance for high-fidelity audio"              
              review="(123 reviews)"
            />
        </div>
        <div className="product-col">
            <ProductCard
              productName='SAMSUNG Galaxy Buds'
              productPrice={'$' + 545.00}
              description="A perfect balance for high-fidelity audio"              
              review="(123 reviews)"
            />
        </div>
        <div className="product-col">
            <ProductCard
              productName='Soundcore Life P3i'
              productPrice={'$' + 545.00}
              description="A perfect balance for high-fidelity audio"              
              review="(123 reviews)"
            />
        </div>
        <div className="product-col">
            <ProductCard
              productName='Anker Life Q20'
              productPrice={'$' + 545.00}
              description="A perfect balance for high-fidelity audio"              
              review="(123 reviews)"
            />
        </div> */}
      </div>
    </div>
  );
};
export default Menu;
