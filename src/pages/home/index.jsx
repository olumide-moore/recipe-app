import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);
  if (loading) {
    return <div className="text-2xl font-semibold text-center">Loading...</div>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <div>
          <p className="lg:text-2xl text-xl text-center text-black font-semibold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
}
