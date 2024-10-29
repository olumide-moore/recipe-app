import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetiailsData, setRecipeDetailsData] = useState(null);

  async function handleSubmit(e) {
    // setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
    setSearchParam("");
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        loading,
        recipeList,
        handleSubmit,
        recipeDetiailsData,
        setRecipeDetailsData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
