import React, { useState } from "react";
import categories from "../../categories.json";
import CategotyCard from "../../components/CategotyCard";

const Home = () => {
  const [categoryList] = useState(categories);
  return (
    <div className="mainCotaner">
      <div className="categoryContainer">
        {categoryList.map((category) => {
          return (
            <CategotyCard
              key={category.id}
              name={category.name}
              id={category.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
