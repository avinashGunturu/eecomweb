import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { checkout } from "../CheckoutContext";

const Header = () => {

    const {uniqueObjArray} =useContext(checkout)

    let totalAmount = 0;

    if(uniqueObjArray.length > 0){

        totalAmount = uniqueObjArray?.reduce((accumulator, currentValue) => {  
        return accumulator + currentValue.price*currentValue.quantity;
      },0);

    }
  return (
    <div className="header">
      <Link className="home" to='/'>Categories</Link>
      <div className="countPrice">
        <Link className="container" to="/CheckOut">
          <span className="count">{uniqueObjArray.length}</span>
          <p className="price">$ {totalAmount ? totalAmount : "00"}.00</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
