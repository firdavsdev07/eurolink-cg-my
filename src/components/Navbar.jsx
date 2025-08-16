import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = ({ content, language, setLanguage }) => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  const navLinks = [
    { to: "home", text: content.navbar__menu1 },
    { to: "about", text: content.navbar__menu2 },
    { to: "work", text: content.navbar__menu3 },
    { to: "formation", text: content.navbar__menu4 },
    { to: "team", text: content.navbar__menu5 },
    { to: "service", text: content.navbar__menu6 },
    { to: "road", text: content.navbar__menu7 },
    { to: "results", text: content.navbar__menu8 },
    { to: "contact", text: content.navbar__menu9 },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
            <img className="w-20" src={Logo} alt="EuroLink Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              className="text-light-text hover:text-accent transition-colors duration-300 cursor-pointer font-medium"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Language Selector & Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-light-text border border-gray-600 rounded-md py-1 px-2 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option className="bg-brand-dark text-light-text">DE</option>
              <option className="bg-brand-dark text-light-text">UZ</option>
            </select>
          </div>
          <div className="xl:hidden">
            <button onClick={handleChange} className="text-light-text focus:outline-none">
              {menu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg transition-transform duration-500 ease-in-out ${
          menu ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              onClick={handleChange}
              className="text-light-text text-lg hover:text-accent transition-colors duration-300 cursor-pointer"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
