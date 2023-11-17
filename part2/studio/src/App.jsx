import "./App.css";
import RateARecipe from "./components/RateARecipe.jsx";
import Button from "./components/Button.jsx";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";

export default function App() {
  return (
    <>
      {/* <RecipeImage /> */}
      {/* <RecipeName /> */}
      <RateARecipe rating={5} />
      <Button saveButton={true} />
      {/* <AuthorInfo /> */}
      {/* <IngredientList /> */}
    </>
  );
}
