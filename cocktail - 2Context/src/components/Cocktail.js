import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({id, name, glass, alch, image}) => {
  
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} />
      </div>
      <div className="cocktail-footer">
      <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alch}</p>
        <Link to={`cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
