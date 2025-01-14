
import { Link } from "react-scroll";
import DarkMode from "../layouts/DarkMode";

import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-10 py-4 bg-tertiary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      {/* Desktop and mobile navigation */}
      <div className="container flex flex-row justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <h1 className="font-semibold text-2xl text-secondary">
              DEVs BURGER
            </h1>
          </Link>
        </div>

        {/* Hamburger menu button (visible in smaller screens) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-secondary focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row gap-4 lg:gap-10 text-secondary font-semibold text-lg absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-tertiary lg:bg-transparent p-4 lg:p-0 shadow-md lg:shadow-none`}
        >
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary transition duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Hamburguers
          </Link>
          <Link
            to="deals"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary transition duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Combos
          </Link>
          <Link
            to="special"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary transition duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Especiais
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-primary transition duration-300 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            Avaliações
          </Link>
          {/* Pedido e modo escuro */}
        <div className="flex items-center gap-4">
          <DarkMode onClick={() => setMenuOpen(false)} />
          <button
            className="bg-primary py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=5561992295015&text=Quero+iniciar+um+projeto%21&type=phone_number&app_absent=0",
                "_blank",
                "noopener noreferrer"
              )
            }
          >
    Fazer Pedido
  </button>
        </div>
        </nav>

        

      </div>
    </header>
  );
};

export default Navbar;


