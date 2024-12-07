const Header = () => (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left side - Book Store Name */}
        <div className="text-lg font-bold text-white">
          <span className="text-2xl font-semibold">Book Store Management</span>
        </div>
  
        {/* Center - Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-300">Home</a>
          <a href="#shop" className="text-white hover:text-yellow-400 transition-colors duration-300">Shop</a>
          <a href="#categories" className="text-white hover:text-yellow-400 transition-colors duration-300">Categories</a>
          <a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact</a>
          <a href="#about" className="text-white hover:text-yellow-400 transition-colors duration-300">About</a>
        </nav>
  
        {/* Right side - Login/Logout Buttons */}
        <div className="flex space-x-6">
          <button className="bg-yellow-500 px-6 py-2 rounded-full text-white font-semibold hover:bg-yellow-400 transition-colors duration-300">
            Login
          </button>
          <button className="bg-red-500 px-6 py-2 rounded-full text-white font-semibold hover:bg-red-400 transition-colors duration-300">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
  
  export default Header;
  