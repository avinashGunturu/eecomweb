import React, { createContext, useEffect, useReducer } from "react";

export const checkout = createContext();

const reducer = (checkoutList, action) => {
  if (action.type === "addtoCheckout") {
    return [...checkoutList, action.payload];
  }else if(action.type=== "removeFromcheckout"){
    checkoutList = checkoutList.filter((item)=> item.id !== action.payload)
    return [...checkoutList]
  }
};


const getInitialProducts = () => {
  const savedProductsRaw = localStorage.getItem('ProductList');

  try {
    const products = savedProductsRaw ? JSON.parse(savedProductsRaw) : [];
    return products;
  } catch (err) {
    return [];
  }
};

const CheckoutContext = ({ children }) => {
  // const [checkoutList, setChekoutList] = useState([]);

  // const products =  JSON.parse(localStorage.getItem("ProductList"))

  const [checkoutList, dispatch] = useReducer(reducer, getInitialProducts());

  useEffect(()=>{

    localStorage.setItem("ProductList", JSON.stringify(checkoutList));

    
  
  },[checkoutList])
  
  
  let uniqueObjArray = [
    ...new Map(checkoutList.map((item) => [item["id"], item])).values(),
  ];
  



  return (
    <checkout.Provider value={{ uniqueObjArray, dispatch }}>
      {children}
    </checkout.Provider>
  );
};

export default CheckoutContext;
