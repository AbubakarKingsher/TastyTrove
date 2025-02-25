import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { getApi } from "../redux/recipeApi";
import { useDispatch, useSelector } from "react-redux";
import LoadingGif from "./LoadingGif";
import { Link } from "react-router-dom";

function Recipes() {
  const dispatch = useDispatch();

  const [popularData, setPopularData] = useState([]);
  const data = useSelector((state) => state.recipes);

  const chiledVariant = {
    initial: { opacity: 0, height: 0 },
    whileHover: {
      opacity: 1,
      height: "70%",
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  };

  useEffect(() => {
    dispatch(getApi());
  }, []);

  useEffect(() => {
    if (data) {
      setPopularData(data?.items?.hits);
    }
  }, [data]);

  return (
    <div className="min-h-[60vh] w-full">
      <div className="w-full mt-10 flex items-center justify-center sm:gap-10 gap-5 flex-wrap sm:p-5">
        {popularData ? (
          popularData.map((item, idx) => (
            <Link key={idx} to={`/recipe/${encodeURIComponent(item.recipe.uri)}`} >
              <motion.div

                initial="initial"
                whileHover="whileHover"
                className="card sm:h-72 h-60 sm:mb-0 mb-5 rounded-2xl sm:w-52 w-40 relative bg-white cursor-pointer overflow-hidden"
              >
                <img
                  className="h-full w-full object-center object-cover"
                  src={item.recipe.image}
                />
                <motion.div
                  variants={chiledVariant}
                  transition="transition"
                  className="absolute bottom-0 px-2 left-[50%] text-2xl text-white -translate-x-[50%] bg-black/55 h-[0%] rounded-t-2xl w-full flex items-center justify-center"
                >
                  <h2 className="text-white text-base text-center font-medium">
                    {item.recipe.label.length > 35
                      ? item.recipe.label.slice(0, 35) + "..."
                      : item.recipe.label}
                  </h2>
                </motion.div>
                <div
                  variants={chiledVariant}
                  transition="transition"
                  className="absolute sm:hidden flex bottom-0 px-2 left-[50%] text-2xl text-white -translate-x-[50%] bg-black/55 h-[50%] rounded-t-2xl w-full items-center justify-center"
                >
                  <h2 className="text-white text-base text-center font-medium">
                    {item.recipe.label.length > 35
                      ? item.recipe.label.slice(0, 35) + "..."
                      : item.recipe.label}
                  </h2>
                </div>
              </motion.div>
            </Link>
          ))
        ) : (
          <LoadingGif />
        )}
      </div>
    </div>
  );
}

export default Recipes;
