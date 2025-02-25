import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { instance } from "../axios";
import { Link } from "react-router-dom";

function Search() {
    const [searchData, setSearchData] = useState([]);
    const [search, setSearch] = useState("");

    const getApi = async () => {
        try {
            const { data } = await instance.get("/search", {
                params: {
                    q: search,
                },
            });
            setSearchData(data.hits);
        } catch (error) {
            console.log("Error getting");
        }
    };

    useEffect(() => {
        getApi();
    }, [search]);

    return (
        <div className="sm:w-92 w-60 sm:mr-10">
            <div className="w-full px-4 text-sm bg-white/30 backdrop-blur-md rounded flex items-center">
                <img className="sm:w-11 w-6 mr-2" src="../search.svg" />
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 sm:text-lg text-sm bg-transparent focus:outline-none"
                />
                {search.length > 0 && (
                    <IoClose onClick={() => setSearch("")} size={25} cursor="pointer" />
                )}
            </div>

            {search.length > 0 && (
                <div className="search h-40 sm:w-92 w-60 mt-[3px] bg-white/30 backdrop-blur-md p-2 border-2 overflow-auto z-50 absolute rounded">
                    {searchData.length > 0 &&
                        searchData.map((item, idx) => {
                            return (
                                <Link to={`/recipe/${encodeURIComponent(item.recipe.uri)}`}>
                                    <div
                                        key={idx}
                                        className="w-full mb-2 bg-transparent p-1 flex sm:gap-5 gap-2 border-2 border-white/50 rounded"
                                    >
                                        <img
                                            className="sm:w-32 w-24 h-full object-cover rounded"
                                            src={item.recipe.image}
                                        />
                                        <h2 className="sm:text-sm text-xs mt-2">
                                            {item.recipe.label.slice(0, 20)} <br />{" "}
                                            <span className="text-xs text-start text-blue-800">
                                                More...
                                            </span>
                                        </h2>
                                    </div>
                                </Link>
                            );
                        })}
                </div>
            )}
        </div>
    );
}

export default Search;
