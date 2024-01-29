import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className=" z-10 bg-menuC fixed top-0 inset-x-0 flex flex-row  p-5 md:px-32 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <nav className="mx-auto  text-lightText hidden md:flex gap-5 font-medium p-1 cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-colorT px-3 transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-colorT px-3 transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-colorT px-3 transition-all cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="works"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-colorT px-3 transition-all cursor-pointer"
          >
            Works
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-colorT px-3 transition-all cursor-pointer"
          >
            Contact
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
            className=" hover:text-colorT px-3 transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-colorT px-3 transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-colorT px-3 transition-all cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="works"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-colorT px-3 transition-all cursor-pointer"
          >
            Works
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-colorT px-3 transition-all cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
