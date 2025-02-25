import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Recipes from "../components/Recipes";
import Images from "../components/Images";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Hero />
            <Category />
            <Recipes />
            <Images />
            <Footer />
        </div>
    );
}

export default Home;
