import { Link } from "react-router-dom";
import { navLists } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/5 bg-black/50 backdrop-blur">
      <nav className="container mx-auto px-5 py-3.5 flex items-center justify-between lg:justify-center gap-5 lg:gap-7">
        <img
          src="/assets/images/apple.svg"
          alt="logo"
          className="lg:w-3 object-contain"
        />

        <ul
          className={`flex items-start lg:p-0 lg:w-fit lg:relative lg:flex-row lg:items-center gap-5 lg:gap-9 2xl:text-gray-200 whitespace-nowrap text-3xl text-white lg:text-xs 2xl:text-sm fixed top-0 left-0 bg-zinc w-full flex-col font-semibold lg:font-normal overflow-auto transition-all duration-500 ${
            isMenuOpen ? "h-screen lg:h-fit" : "h-0 lg:h-fit"
          }`}
        >
          {navLists.map((list) => (
            <li
              key={list}
              className="first:mt-14 last:mb-14 ml-10 lg:m-0 lg:first:m-0 lg:last:m-0"
            >
              <Link to="/">{list}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-7">
          <img
            src="/assets/images/search.svg"
            alt="search"
            className="w-[1.1rem] xl:w-3.5"
          />
          <img
            src="/assets/images/bag.svg"
            alt="cart"
            className="w-4 xl:w-3.5"
          />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center gap-1.5 relative transition-all duration-500 h-5 lg:hidden"
          >
            <span
              className={`bg-white block h-[1px] ${
                isMenuOpen ? "rotate-45 w-5 absolute" : "rotate-0 relative w-4"
              }`}
            />
            <span
              className={`bg-white block h-[1px] ${
                isMenuOpen ? "-rotate-45 w-5" : "rotate-0 relative w-4"
              }`}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
