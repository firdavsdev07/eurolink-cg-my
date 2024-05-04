import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = ({ content, language, setLanguage }) => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="z-10 bg-menuC fixed top-0 inset-x-0 flex flex-row  p-5 md:text-sm2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <nav className="mx-auto hidden md:flex gap-5 font-medium p-1 cursor-pointer">
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
          <Link className="Language">
            <select
              id="countries"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option className="">germany</option>
              <option className="">uzb</option>
            </select>
          </Link>
        </nav>
        <div
          className="flex cursor-pointer z-10 text-colorT md:hidden"
          onClick={handleChange}
        >
          <div className="p-2">
            <AiOutlineMenu size={30} />
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={` ${
            menu ? "translate-y-0" : "-translate-y-full"
          } md:hidden  flex flex-col absolute bg-menuC text-lightText left-0 top-0 font-medium text-1xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
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
          <div className="btn-group">
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
            >
              <option>germany</option>
              <option>uzb</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
