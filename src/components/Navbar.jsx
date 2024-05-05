import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = ({ content, language, setLanguage }) => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="z-10   bg-menuC fixed top-0 inset-x-0  flex-row  p-5 md:text-sm2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <nav className="mx-auto hidden  xl:flex gap-5 items-center font-normal p-1 cursor-pointer ">
          <div>
            <img className="w-24 p-0" src={Logo} alt="" />
          </div>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu1}
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu2}
          </Link>
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu3}
          </Link>
          <Link
            to="formation"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu4}
          </Link>

          <Link
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu5}
          </Link>
          <Link
            to="l"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu6}
          </Link>
          <Link
            to="l"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu7}
          </Link>
          <Link
            to="l"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu8}
          </Link>
          <Link
            to="l"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu9}
          </Link>
          <Link className="language">
            <select
              id="countries"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option className="text-amber-700">DE</option>
              <option className="text-green-500">UZ</option>
            </select>
          </Link>
        </nav>
        <div
          className="flex  z-10 cursor-pointer  text-colorT xl:hidden"
          onClick={handleChange}
        >
          <div className="p-2">
            <AiOutlineMenu className="menu z-50" size={30} />
          </div>
          <div>
            <img className="logo w-24 p-0" src={Logo} alt="" />
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={` ${
            menu ? " z-10 translate-y-0" : "-translate-y-full"
          } xl:hidden  flex flex-col absolute bg-menuC text-lightText left-0 top-0 font-medium text-1xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu1}
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu2}
          </Link>
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu3}
          </Link>
          <Link
            to="formation"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu4}
          </Link>

          <Link
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu5}
          </Link>
          <Link
            to="l"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu6}
          </Link>
          <Link
            to="l"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu7}
          </Link>
          <Link
            to="l"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu8}
          </Link>
          <Link
            to="l"
            spy={true}
            smooth={true}
            duration={500}
            className=" text-colorT text-sm transition-all cursor-pointer"
          >
            {content.navbar__menu9}
          </Link>
          <div className="language__mobile">
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option>DE</option>
              <option>UZ</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
