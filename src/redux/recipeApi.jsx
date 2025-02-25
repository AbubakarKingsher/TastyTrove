import { instance } from "../axios";
import { setRecipes } from "./recipeSlice";

export const getApi = () => async (dispatch, getState) => {
    try {
        const {data} = await instance.get("/search", { params: { q: "trending", from: 0, to: 30 } });

        dispatch(setRecipes(data));
    } catch (error) {
        console.log(error, "Error getting");
    }
};

