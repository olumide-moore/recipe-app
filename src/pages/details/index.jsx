import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export function Details() {
  const { id } = useParams(); //gotten from the URL
  const { recipeDetiailsData, setRecipeDetailsData } =
    useContext(GlobalContext);
  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        console.log(data);
        if (data?.data?.recipe) {
          setRecipeDetailsData(data?.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getRecipeDetails();
  }, []);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-1 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetiailsData?.recipe?.image_url}
            alt={recipeDetiailsData?.recipe?.title}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
}
