import React, { useContext } from "react";
import CheckOutCard from "../../components/CheckOutCard";
import { checkout } from "../../CheckoutContext.js";











const Checkout = () => {
const { uniqueObjArray } = useContext(checkout);


  return (
    <div className="mainCheckoutPage">
      <div className="headings">
        <p>Image</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove from cart</p>
      </div>

      {uniqueObjArray.length === 0 ? (
        <h3 style={{ textAlign: "center", margin: "40px" }}>
          No products added to cart
        </h3>
      ) : (
        <div>
          {uniqueObjArray.map((product) => {
            return (
              <CheckOutCard
                key={product.id}
                thumbnail={product.thumbnail}
                price={product.price}
                name={product.name}
                id={product.id}
                quantity={product.quantity}
                categoryId={product.categoryId}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Checkout;
