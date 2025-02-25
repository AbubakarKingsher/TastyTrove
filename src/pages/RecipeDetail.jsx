import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../axios";
import Footer from "../components/Footer";
import LoadingGif from "../components/LoadingGif";
import { setRecipes } from "../redux/recipeSlice";

function RecipeDetail() {
  const { uri } = useParams();

  const decodedUri = decodeURIComponent(uri);

  const [recipe, setRecipe] = useState();

  const getRecipe = async () => {
    try {
      const response = await instance.get("/search", {
        params: {
          r: decodedUri,
          from: 0,
          to: 30,
        },
      });
      const recipeData = response.data;
      if (recipeData && recipeData.length > 0) {
        setRecipe(recipeData[0]);
      }
    } catch (error) {
      console.log(error, "Error getting recipe");
    }
  };

  useEffect(() => {
    getRecipe();

  }, [decodedUri]);

  return (
    <div className="min-h-screen w-full relative">
      <div className="recipes sm:h-[50vh] h-[30vh] w-full relative p-3">
        <div className="absolute w-full sm:top-[110%] top-[120%] -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-7">
          <div className="sm:h-72 sm:w-96 h-52 w-72 border-4 overflow-hidden bg-black border-amber-500 sm:rounded-[80px] rounded-[55px]">
            {recipe ? (
              <img
                className="h-full w-full object-cover"
                src={recipe?.image}
              />
            ) : (
              <h3 className="text-white flex items-center justify-center h-full font-medium sm:text-2xl text-lg">
                Loading...
              </h3>
            )}
          </div>
          <h1 className="font-[PoetsenOne] sm:text-3xl text-2xl text-center">
            {recipe?.label.length > 40
              ? recipe?.label.slice(0, 40) + "..."
              : recipe?.label}
          </h1>
          <h3 className="font-medium underline sm:text-sm text-xs text-black/40">
            Scroll Down
          </h3>
        </div>
      </div>
      {recipe ? (
        <div className="min-h-[70vh] w-[80%] mt-72 flex mx-auto flex-wrap p-2 mb-5 justify-center">
          <div className="h-80 w-60">
            <img
              className="h-full w-full object-cover"
              src={recipe?.image}
            />
          </div>
          <div className="sm:text-lg text-sm md:mt-0 mt-10 sm:ml-10">
            <h2 className="uppercase mt-5 mb-3 underline font-semibold">
              ingredients
            </h2>
            {recipe &&
              recipe.ingredientLines.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
          </div>
        </div>
      ) : (
        <LoadingGif />
      )}
      <div className="h-[1px] w-72 bg-black/50 mb-5 mx-auto"></div>
      <div className="gap-2 w-full flex flex-wrap items-center justify-center my-10 px-2">
        {recipe &&
          recipe.healthLabels.map((item, idx) => (
            <p
              className="rounded border-2 h-10 flex items-center justify-center py-3 px-2"
              key={idx}
            >
              {item}
            </p>
          ))}
      </div>
      <div className="my-5 p-4 border border-black rounded-lg bg-white sm:mx-10 mx-2 mb-40">
        <h3 className="text-lg font-semibold border-b border-black pb-2 mb-5">
          Nutrition Information
        </h3>

        {recipe?.totalNutrients ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-amber-500">
                <th className="border border-black p-2 text-left">
                  Nutrient
                </th>
                <th className="border border-black p-2 text-right">
                  Quantity
                </th>
                <th className="border border-black p-2 text-left">Unit</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(recipe.totalNutrients).map(([key, nutrient]) => (
                <tr key={key}>
                  <td className="border border-black p-2">
                    {nutrient.label}
                  </td>
                  <td className="border border-black p-2 text-right">
                    {Math.round(nutrient.quantity)}
                  </td>
                  <td className="border border-black p-2">
                    {nutrient.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No nutrient information available.</p>
        )}

        <h3 className="text-lg font-semibold border-b border-black pb-2 mt-8 mb-5">
          Daily Nutritional Values
        </h3>

        {recipe?.totalDaily ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-amber-60">
                <th className="border border-black p-2 text-left">
                  Nutrient
                </th>
                <th className="border border-black p-2 text-right">
                  % Daily Value
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(recipe.totalDaily).map(([key, nutrient]) => (
                <tr key={key}>
                  <td className="border border-black p-2">
                    {nutrient.label}
                  </td>
                  <td className="border border-black p-2 text-right">
                    {Math.round(nutrient.quantity)}
                    {nutrient.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No daily nutritional information available.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default RecipeDetail;
