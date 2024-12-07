import React from "react";
import ExploreCategories from "../pages/ExploreCategories";

const Collection = () => (
  <section className="flex flex-col justify-center items-center text-center py-16 bg-gray-100">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
      About Our Collection
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto px-4">
      Discover books that inspire, educate, and entertain. From timeless classics to the latest releases, we offer a curated selection that caters to every reader. Let your imagination soar as you dive into the world of stories, knowledge, and adventure.
    </p>
    <button className="bg-blue-600 px-8 py-4 rounded-full text-white font-semibold hover:bg-blue-500 transition-colors duration-300">
      Learn More
    </button>
    <ExploreCategories />
  </section>
);

export default Collection;
