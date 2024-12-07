const Navbar = () => {
    return (
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">Book Store</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="text-white hover:text-yellow-300"
              >
                Home
              </a>
              <a
                href="#shop"
                className="text-white hover:text-yellow-300"
              >
                Shop
              </a>
              <a
                href="#categories"
                className="text-white hover:text-yellow-300"
              >
                Categories
              </a>
              <a
                href="#contact"
                className="text-white hover:text-yellow-300"
              >
                Contact
              </a>
              <a
                href="#about"
                className="text-white hover:text-yellow-300"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  