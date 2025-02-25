import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoryDetail from "./pages/CategoryDetail";
import RecipeDetail from "./pages/RecipeDetail";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryDetail />} />
        <Route path="/recipe/:uri" element={<RecipeDetail />} />
      </Routes>
    </>
  );
}

export default App;
