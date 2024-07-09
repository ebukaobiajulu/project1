import React from "react"
import CartItems from "../../components/CartItems/CartItems"
const Cart = () => {
  return (
    <div>
        <div className="container">
            <CartItems />
            <h3>Your shopping cart is empty</h3>
        </div>
    </div>
  )
}
export default Cart