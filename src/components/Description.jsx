import React from "react";
import ExploreCategories from "../pages/ExploreCategories";

const Description = () => (
  <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D')" }}>
    <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
    <div className="relative z-10 flex justify-center items-center h-full text-center text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          Unleash the Power of Reading
        </h2>
        <p className="text-lg md:text-xl italic mb-6">
          "A book is a dream that you hold in your hands. Explore the magic of books with us."
        </p>
        <button className="bg-yellow-500 px-8 py-4 rounded-full text-white font-semibold hover:bg-yellow-400 transition-colors duration-300">
          Start Your Journey
        </button>
      </div>
    </div>
  </section>
  
);

export default Description;
