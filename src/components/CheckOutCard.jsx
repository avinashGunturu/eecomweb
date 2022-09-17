import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import { checkout } from "../CheckoutContext";

const CheckOutCard = ({ thumbnail,categoryId, name, price,id ,quantity}) => {
 
  const {dispatch}=useContext(checkout)

  const addTocart = () => {
    const Productitem = {
      thumbnail,
      categoryId,
      name,
      price,
      id,
      quantity:quantity+1
    };
    dispatch({ type: "addtoCheckout", payload: Productitem });
  };
  const removeFromcart = () => {

    if(quantity<=1){
      return dispatch({type:"removeFromcheckout",payload:id})
    }
    const Productitem = {
      thumbnail,
      categoryId,
      name,
      price,
      id,
      quantity:quantity-1
    };
    dispatch({ type: "addtoCheckout", payload: Productitem });
  };
 
  return (
    <div className="checkoutCard">
      <img src={thumbnail} alt={name} />
      <p>{name}</p>
      <p>$ {price}</p>
      <div className="quantity">
        <div className="sub" onClick={removeFromcart}>-</div>
        <p>{quantity}</p>
        <div className="add" onClick={addTocart}>+</div>
      </div>
      <div className="cross" onClick={()=> dispatch({type:"removeFromcheckout",payload:id})} >
        <ImCross />
      </div>
    </div>
  );
};

export default CheckOutCard;
