import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Productname from "../../components/Productname";
import productList from "../../products.json";

const Category = () => {
  const { CategoryId } = useParams();
  const [itemList, setItemList] = useState([]);
 

  useEffect(() => {
    setItemList(
      productList.filter((product) => product.categoryId === CategoryId)
    );

    

  }, [CategoryId]);






const sortbyprice = (e)=>{

   if(e.target.checked){
     setItemList([...(itemList.sort((a,b) => { return  b.price - a.price} ))])
   }
 else {
  setItemList(
    [...(productList.filter((product) => product.categoryId === CategoryId))]
  );
 }   
}

const sortbydelivery = (e)=> {


  if(e.target.checked){
    setItemList([...(itemList.filter((product) => product.delivery !==  false)) ])
  }else {
    setItemList(
      [...(productList.filter((product) => product.categoryId === CategoryId))]
    );
   }
}

const resetList = ()=>{

  setItemList(
    [...(productList.filter((product) => product.categoryId === CategoryId))]
  );
  
}

  return (
    <div className="mainCategoryCotaner">
      <div className="container1">
        <h2>Filters</h2>
        <div className="filters">
          <div className="cbox delivery" onClick={sortbydelivery}>
            <input type="checkbox" name="delivery" id="delevery" />
            <label htmlFor="delivery" >Delivery</label>
          </div>
          <div className="expensive" onClick={sortbyprice}>
            <input type="checkbox" name="expensive" id="expensive" />
            <label htmlFor="cbox delivery">Expensive</label>
          </div>
          <div className="bestSelling">
            <input type="checkbox" name="bestSelling" id="bestSelling" />
            <label htmlFor="cbox delivery">Best-Selling</label>
          </div>
        </div>

        <button className="reset" onClick={resetList}>Reset Filter</button>
      </div>

      <div className="container1">
        <Productname id={CategoryId} />
        <div className="products">
          {itemList?.map((item) => (
            <ProductCard
              key={item.id}
              thumbnail={item?.thumbnail}
              categoryId={item?.categoryId}
              inStock={item.inStock}
              name={item.name}
              id={item.id}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
