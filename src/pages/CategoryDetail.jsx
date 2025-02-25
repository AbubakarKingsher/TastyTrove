import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { instance } from "../axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import LoadingGif from "../components/LoadingGif";

function CategoryDetail() {
    const { name } = useParams();

    const [category, setCategory] = useState([]);

    const chiledVariant = {
        initial: { opacity: 0, height: 0 },
        whileHover: {
            opacity: 1,
            height: "70%",
            transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
        },
    };

    const getCategory = async () => {
        try {
            const { data } = await instance.get("/search", {
                params: {
                    q: name,
                    from: 0,
                    to: 30,
                },
            });
            setCategory(data.hits);
        } catch (error) {
            console.log(error, "Error getting category");
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <div className="w-full min-h-[60vh]">
            <div className="background ">
                <Navbar />
            </div>
            <h1 className="heading relative text-2xl mx-auto py-8 font-semibold w-fit">
                {name}
            </h1>
            <div className="flex items-center justify-center flex-wrap gap-4 px-5 pb-32">
                {category.length > 0 ? (
                    category.map((item, idx) => (
                        <Link key={idx} to={`/recipe/${encodeURIComponent(item.recipe.uri)}`}>
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
                                        {item.recipe.label}
                                    </h2>
                                </motion.div>
                                <div
                                    variants={chiledVariant}
                                    transition="transition"
                                    className="absolute sm:hidden flex bottom-0 px-2 left-[50%] text-2xl text-white -translate-x-[50%] bg-black/55 min-h-[50%] rounded-t-2xl w-full items-center justify-center"
                                >
                                    <h2 className="text-white text-base text-center font-medium">
                                        {item.recipe.label}
                                    </h2>
                                </div>
                            </motion.div>
                        </Link>
                    ))
                ) : (
                    <LoadingGif />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default CategoryDetail;
