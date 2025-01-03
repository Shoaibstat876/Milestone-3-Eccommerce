import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

// Define the Product type to avoid using 'any'
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(0); // Default to 0 cart items
  const [searchResults, setSearchResults] = useState<Product[]>([]); // Use the Product type for searchResults

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product/1" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faq" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  useEffect(() => {
    const fetchCartItems = async () => {
      const response = await fetch("/api/cart");
      const data = await response.json();
      setCartItems(data.itemCount); // Update the cart item count dynamically
    };

    fetchCartItems();
  }, []);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();

    if (searchQuery.trim()) {
      const response = await fetch(`/api/search?query=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/assets/images/logo.png"
            alt="Tech Hive Logo"
            width={70}
            height={70}
            className="rounded-full transition-transform duration-200 transform hover:scale-110"
            priority
          />
          <h1 className="text-3xl font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-300">
            Tech Hive
          </h1>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden sm:flex items-center border border-gray-300 rounded-lg px-4 py-2 w-96 focus-within:ring-2 focus-within:ring-teal-500">
          <input
            type="text"
            placeholder="Search for electronics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full outline-none px-2 py-1 text-gray-700 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200"
          >
            Search
          </button>
        </form>

        {/* Cart Icon */}
        <div className="relative flex items-center gap-4">
          <Link href="/cart">
            <div className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-teal-500 hover:text-white transition-colors duration-200">
              <PiShoppingCartSimpleLight className="text-2xl" />
              <span className="bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {cartItems}
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden text-gray-800 focus:outline-none"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <span className="text-2xl">&times;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:block py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-6 text-gray-700">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={path}
                    className={`hover:text-teal-600 transition-colors duration-200 ${
                      name === "Home" ? "text-teal-500 font-semibold" : ""
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <Link href="/contact">
            <div className="text-gray-700 cursor-pointer hover:text-teal-600 transition duration-200">
              Contact: <span className="font-semibold">(808) 555-0111</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="sm:hidden bg-white py-4 shadow-lg">
          <ul className="space-y-2 px-6 text-gray-700">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className="block hover:text-teal-600 transition-colors duration-200"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-white shadow-lg p-4 mt-4">
          <ul>
            {searchResults.map((product) => (
              <li key={product.id} className="flex items-center space-x-4 py-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
                <div>
                  <Link href={`/product/${product.id}`} className="text-teal-500 font-semibold">{product.name}</Link>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
