import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { setRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
