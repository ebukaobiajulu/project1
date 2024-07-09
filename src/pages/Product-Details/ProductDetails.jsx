import React, {useContext} from "react"
import { useParams } from "react-router-dom"
import Breadcrum from "../../components/Breadcrum/Breadcrum"
import { ShopContext } from "../../Context/ShopContext"



const ProductDetails = (props) => {
  const {data_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = data_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product = {product} name = {props.productName}/>
    </div>
  )
}
export default ProductDetails