import React from "react";
import Navbar from "./Navbar";

function Hero() {
    return (
        <div className="background md:h-screen min-h-[60vh] pb-5 w-full bg-cover">
            <Navbar />
            <div className="sm:pl-20 pl-0 sm:block flex items-center flex-col">
                <div className="sm:text-[5vw] text-[11vw] sm:text-start text-center font-[PoetsenOne] sm:leading-[6vw] leading-[10vw] font-semibold mt-15 mb-5">
                    <h1>Simple and</h1>
                    <h1>Tasty Recipes</h1>
                </div>
                <p className="mb-12 sm:text-sm text-xs font-medium sm:text-start text-center">
                    The foundational guide to balancing <br /> your nutritional diets and
                    everyday <br /> lifestyle
                </p>
                <button className="py-2 cursor-pointer px-4 bg-[#ff8f02] text-white font-medium rounded">Find Out More</button>
            </div>
        </div>
    );
}

export default Hero;
