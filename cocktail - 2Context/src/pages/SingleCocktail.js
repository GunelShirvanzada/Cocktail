import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=id`;

const SingleCocktail = () => {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState([]);

  const fetchDataSingle = async () => {
    const dataSingle = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)).json();

    const { strDrink, strDrinkThumb, strGlass, strAlcoholic, idDrink, strCategory } = dataSingle.drinks[0]
    const newCocktail = {
      idd: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      glass: strGlass,
      alch: strAlcoholic,
      category: strCategory
    }

    setCocktail(newCocktail)
    console.log(dataSingle.drinks);
  }

  useEffect(() => {
    fetchDataSingle()
  }, [id]);

  const { idd, name, image, glass, alch, category } = cocktail
  return (
    <section className="section cocktail-section">
      back home
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {alch}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructons :</span> instr
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
