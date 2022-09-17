import React from "react";
import { Link } from "react-router-dom";

const CategotyCard = ({ name, id }) => {
  return (
    <>
      <Link className="category" to={`/Category/${id}`}>
        <p className="categoryName">{name}</p>
      </Link>
    </>
  );
};

export default CategotyCard;
