import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Footer = ({ content }) => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/groups/1586290418418966/",
      icon: <FaFacebook size={24} />,
    },
    {
      href: "https://www.instagram.com/eurolink_cg/?igshid=YmMyMTA2M2Y%3D",
      icon: <FaInstagram size={24} />,
    },
    {
      href: "https://www.youtube.com/channel/UCd0hk3rG5pnO37fBlO6So-w",
      icon: <FaYoutube size={24} />,
    },
  ];

  const navLinks = [
    { to: "home", text: content.navbar__menu1 },
    { to: "about", text: content.navbar__menu2 },
    { to: "work", text: content.navbar__menu3 },
    { to: "service", text: content.navbar__menu6 },
    { to: "contact", text: content.navbar__menu9 },
  ];

  return (
    <div className="bg-brand-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Social */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              <img className="h-12 w-auto mb-4" src={Logo} alt="EuroLink CG" />
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              {content.contact__page1 || "Connecting you with us on social media."}
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-semibold text-light-text uppercase mb-4">Quick Links</h6>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-accent transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="font-semibold text-light-text uppercase mb-4">{content.contact__page5}</h6>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MdLocationOn className="flex-shrink-0 mr-3 mt-1 h-5 w-5 text-accent" />
                <span>{content.contact__page6}</span>
              </li>
              <li className="flex items-start">
                <MdLocationOn className="flex-shrink-0 mr-3 mt-1 h-5 w-5 text-accent" />
                <span>{content.contact__page7}</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="flex-shrink-0 mr-3 h-5 w-5 text-accent" />
                <a href="mailto:eurolink.consulting@gmail.com" className="hover:text-accent transition-colors duration-300">
                  eurolink.consulting@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Contacts */}
          <div>
            <h6 className="font-semibold text-light-text uppercase mb-4">Front Office</h6>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <FaTelegram className="flex-shrink-0 mr-3 h-5 w-5 text-accent" />
                <a href="https://t.me/Eurolink_administration_1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                  eurolink_administration_1
                </a>
              </li>
               <li className="flex items-center">
                <MdPhone className="flex-shrink-0 mr-3 h-5 w-5 text-accent" />
                <span>+998977736535</span>
              </li>
            </ul>
             <h6 className="font-semibold text-light-text uppercase my-4">Back Office</h6>
             <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <FaTelegram className="flex-shrink-0 mr-3 h-5 w-5 text-accent" />
                <a href="https://t.me/Eurolink_consulting_1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                  eurolink_consulting_1
                </a>
              </li>
               <li className="flex items-center">
                <MdPhone className="flex-shrink-0 mr-3 h-5 w-5 text-accent" />
                <span>+49 162 9418261</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>{content.contact__page8}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
