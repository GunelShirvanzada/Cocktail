import React from "react";
import Cocktail from "./Cocktail";
import { GlobalContext } from "../cntext";

const CocktailList = () => {
  const { cocktail } = GlobalContext();
  if (cocktail.length < 1) {
    return <h2 className="section-title">
      no cocktails matched your search criteria
    </h2>
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktail.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}

      </div>
    </section>
  );
};

export default CocktailList;
