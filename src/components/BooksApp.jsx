import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCartPlus, FaInfoCircle } from "react-icons/fa"; // Importing icons

const BooksApp = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [category, setCategory] = useState("fiction");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [cart, setCart] = useState([]);

  // Fetch books from Google Books API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=12`
        );
        setBooks(response.data.items || []);
        setFilteredBooks(response.data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [category]);

  // Filter books
  const filterBooks = () => {
    const filtered = books.filter((book) => {
      const bookTitle = book.volumeInfo.title || "";
      const bookAuthor = (book.volumeInfo.authors || []).join(", ");
      const bookPrice =
        (book.saleInfo.listPrice && book.saleInfo.listPrice.amount) || 0;

      return (
        bookTitle.toLowerCase().includes(title.toLowerCase()) &&
        bookAuthor.toLowerCase().includes(author.toLowerCase()) &&
        bookPrice >= priceRange[0] &&
        bookPrice <= priceRange[1]
      );
    });

    setFilteredBooks(filtered);
  };

  // Add to cart
  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  // Truncate text if it's too long
  const truncateText = (text, maxLength) => {
    return text && text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8 drop-shadow-lg">
        📚 Book Explorer
      </h1>

      {/* Filters */}
      <div className="bg-white shadow-xl rounded-lg p-6 mb-8">
        <div className="flex flex-wrap gap-6 justify-center">
          <select
            className="border border-gray-300 rounded-lg p-3 w-64 text-gray-700 focus:ring-2 focus:ring-indigo-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="fiction">Fiction</option>
            <option value="history">History</option>
            <option value="science">Science</option>
            <option value="art">Art</option>
          </select>
          <input
            type="text"
            placeholder="Filter by Title"
            className="border border-gray-300 rounded-lg p-3 w-64 text-gray-700 focus:ring-2 focus:ring-indigo-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Author"
            className="border border-gray-300 rounded-lg p-3 w-64 text-gray-700 focus:ring-2 focus:ring-indigo-400"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300"
            onClick={filterBooks}
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Books List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks.map((book, index) => {
          const { title, authors, imageLinks, categories } = book.volumeInfo;
          const price = book.saleInfo?.listPrice?.amount || "Not for sale";
          const bookCategory = categories ? categories.join(", ") : "N/A";

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6 flex flex-col items-center"
            >
              <img
                src={imageLinks?.thumbnail || "https://via.placeholder.com/150"}
                alt={title}
                className="mb-4 w-40 h-56 object-cover rounded-md"
              />
              <h2 className="font-semibold text-xl text-center text-gray-800 truncate max-w-full">
                {truncateText(title, 30)}
              </h2>
              <p className="text-sm text-gray-600 mt-2 truncate max-w-full">
                Author: {truncateText(authors?.join(", ") || "N/A", 30)}
              </p>
              <p className="text-sm font-semibold text-gray-700 mt-2">
                Price: ₹{price}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Category: {bookCategory}
              </p>
              <div className="mt-6 flex gap-6 justify-center">
                {/* Add to Cart Button */}
                <button
                  className="bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:translate-y-1 transition-all duration-300 ease-in-out flex items-center gap-2"
                  onClick={() => addToCart(book)}
                >
                  <FaCartPlus className="text-lg" />
                  <span>Add to Cart</span>
                </button>

                {/* Learn More Button */}
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:translate-y-1 transition-all duration-300 ease-in-out flex items-center gap-2">
                  <FaInfoCircle className="text-lg" />
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BooksApp;
