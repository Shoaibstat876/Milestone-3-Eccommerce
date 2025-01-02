import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Define the category type
interface Category {
  name: string;
  href: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);

  // Social media links
  const socialLinks = [
    { icon: faFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: faTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: faInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: faPinterest, href: "https://pinterest.com", label: "Pinterest" },
    { icon: faYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  // Support links
  const supportLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "FAQs", href: "/faqs" },
  ];

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Handle newsletter subscription
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12 lg:py-16 border-t border-gray-700">
      <div className="container mx-auto px-6 max-w-screen-lg grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Social Links */}
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/images/logo.png"
              alt="Tech Hive Logo"
              width={32}
              height={32}
            />
            <h1 className="text-lg font-bold text-white">Tech Hive</h1>
          </div>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Tech Hive is your one-stop destination for all things electronics.
            Explore a wide range of products designed to enhance your tech
            experience.
          </p>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-white font-semibold text-sm">CATEGORY</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            {categories.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-teal-500 transition"
                  aria-label={`View ${name}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white font-semibold text-sm">SUPPORT</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            {supportLinks.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-teal-500 transition"
                  aria-label={`Read ${name}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold text-sm">NEWSLETTER</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 text-sm"
                aria-label="Subscribe to Newsletter"
              >
                Submit
              </button>
            </div>
          </form>
          {isSubmitted && (
            <p className="mt-4 text-xs text-teal-500">Email submitted successfully!</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
