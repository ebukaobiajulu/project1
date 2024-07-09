import React, {createContext, useContext, useState} from "react";
import data_product from "../assets/data";

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < data_product.length + 1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const ShopContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState(getDefaultCart())
    
    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] +1}))
        console.log(cartItems)
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
    }

    const contextValue = {data_product, cartItems, addToCart, removeFromCart}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider