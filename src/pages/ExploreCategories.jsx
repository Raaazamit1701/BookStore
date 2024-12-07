import React from "react";

// Categories array with names and Unsplash image URLs
const categories = [
  {
    name: "Fiction",
    image: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeSUyMGZpY3Rpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Science",
    image: "https://images.unsplash.com/photo-1554357395-dbdc356ca5da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxpYnJhcnklMjBzY2llbmNlfGVufDB8fDB8fHww",
  },
  {
    name: "History",
    image: "https://plus.unsplash.com/premium_photo-1682125784386-d6571f1ac86a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Children",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbGRyZW58ZW58MHx8MHx8fDA%3D",
  },
];

const ExploreCategories = () => (
  <section className="py-16 px-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg mt-10">
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">
      Explore Our Categories
    </h2>
    <div className="flex justify-center gap-8 flex-wrap">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden w-72 mb-8 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-48 object-cover transform hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category.name}</h3>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105">
              Explore
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExploreCategories;
