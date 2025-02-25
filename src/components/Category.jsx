import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function Category() {
    const foodData = [
        {
            img: "./salad.svg",
            heading: "Salad",
            pera: "Crunchy veggies, tangy dressing—light, healthy, and refreshing!",
        },

        {
            img: "./cake.svg",
            heading: "Cake",
            pera: "Soft layers, creamy frosting—every bite feels magical!",
        },

        {
            img: "./burger.svg",
            heading: "Burger",
            pera: "Juicy patty, crispy veggies, creamy sauce—perfect bite!",
        },

        {
            img: "./icecream.svg",
            heading: "Ice cream",
            pera: "Cold, creamy, flavorful—one scoop fixes everything!",
        },

        {
            img: "./pasta.svg",
            heading: "Pasta",
            pera: "Cheesy, saucy, delicious—pure Italian comfort food!",
        },

        {
            img: "./cookies.svg",
            heading: "Cookies",
            pera: "Crispy outside, soft inside—choco-filled happiness!",
        },
    ];

    return (
        <div className="w-full">
            <h2 className="heading relative mx-auto py-8 text-2xl w-fit font-semibold">
                Taste of Food
            </h2>
            <div className="w-full flex items-center flex-wrap justify-center gap-10 px-8">
                {foodData.map((item, idx) => (
                    <Link
                        className="inline-block"
                        key={idx}
                        to={`/category/${item.heading.toLowerCase()}`}
                    >
                        <motion.div
                            initial={{ backgroundColor: "rgb(255,255,255)", color: "black" }}
                            whileHover={{ backgroundColor: "rgb(255,143,2)", color: "white" }}
                            transition={{ duration: 0.5, ease: [0.37, 0, 0.63, 1] }}
                            className="sm:h-28 h-26 rounded sm:w-92 w-72 p-5 flex items-center gap-5 cursor-pointer"
                        >
                            <img
                                className="sm:w-20 w-15 rounded-md bg-white p-2"
                                src={item.img}
                            />
                            <div>
                                <h3 className="sm:text-lg font-medium">{item.heading}</h3>
                                <p className="sm:text-sm text-xs opacity-75">{item.pera}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
            <hr className="opacity-25 w-[50%] mx-auto mt-15" />
        </div>
    );
}

export default Category;
