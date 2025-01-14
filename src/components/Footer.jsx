/* eslint-disable no-unused-vars */
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className=" bg-tertiary text-secondary rounded-t-3xl pt-8 md:pt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-2xl pb-4">DEVs BURGER</h1>
          <div className=" flex gap-5">
            <FaInstagram size={35} />
            <FaFacebook size={35} />
            <FaLinkedin size={35} />
          </div>
          <p className=" mt-2">
            Site exemplo para empresas com o seguimento em Alimentações.
          </p>
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Acesse aos Links
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-primary transition duration-300 ease-in-out"
            >
              Cardapio
            </Link>
            <Link
              to="deals"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-primary transition duration-300 ease-in-out"
            >
              Exclusivo
            </Link>
            <Link
              to="special"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-primary transition duration-300 ease-in-out"
            >
              Especiais
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0">
            Contato
          </h1>
          <nav className="flex flex-col gap-2 font-medium">
            <a
              href="https://api.whatsapp.com/send/?phone=5561992295015&text=Quero+iniciar+um+projeto%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              dev.pablonunes@gmail.com
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5561992295015&text=Quero+iniciar+um+projeto%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              61 992295015
            </a>
          </nav>

        </div>
      </div>
      <div>
          <p className="text-center py-4">
            {new Date().getFullYear()} &copy; {" "}
            
            Todos os direitos reservados | Desenvolvido por {" "} 

            <a
              href="https://api.whatsapp.com/send/?phone=5561992295015&text=Quero+iniciar+um+projeto%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold"
            >
              Pablo Nunes
            </a>{" "}
          </p>
        </div>

    </footer>
  );
};

export default Footer;
