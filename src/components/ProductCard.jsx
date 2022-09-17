import React, { useContext, useState} from "react";
import { checkout } from "../CheckoutContext";

const ProductCard = ({ thumbnail, categoryId, inStock, name, id, price }) => {
  const { dispatch } = useContext(checkout);

  const [quantity,setQuantity]=useState(1)
  const addcart = () => {
    setQuantity(quantity+1)
    const Productitem = {
      thumbnail,
      categoryId,
      name,
      price,
      id,
      quantity
    };
    dispatch({ type: "addtoCheckout", payload: Productitem });
  };
  return (
    <div className="productContainer">
      <div className="imgContainer">
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className="productDetails">
        <h4 className="name">{name}</h4>
        <p className="price">${price}</p>
        {inStock ? (
          <p className="stock text-green">In Stock</p>
        ) : (
          <p className="stock text-red">Out Of Stock</p>
        )}
        {inStock ? (
          <button className="addtocard active-btn" onClick={addcart}  >
            Add to cart
          </button>
        ) : (
          <button className="addtocard inactive-btn">Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
