import { createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
    const [cocktail, setCocktail] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async () => {
        const data = await (await fetch(`${url}${searchTerm}`)).json();
        const {drinks} = data

        if (drinks) {
            const newCocktail = drinks.map((item) => {
                const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    glass: strGlass,
                    alch: strAlcoholic
                }
            })
            setCocktail(newCocktail)
        } else {
            setCocktail([])
        }
    };

    useEffect(() => {
        fetchData()
    }, [searchTerm]);

    return <AppContext.Provider value={{cocktail, setSearchTerm}}> {children} </AppContext.Provider>
}

export const GlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider }