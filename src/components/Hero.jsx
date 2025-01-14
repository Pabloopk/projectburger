
import img from "../assets/img/hero.png";

const Hero = () => {
  return (
    <div className=" dark:bg-gray-900 dark:text-white">
      <div className="min-h-screen container flex flex-col justify-center md:flex-row md:justify-between items-center">
        {/* content section  */}
        <div className="w-full md:w-2/4 space-y-8 text-center md:text-start mt-24 md:mt-10">
          <div>
            <h3 className=" font-bold text-4xl md:text-5xl">Desenvolvimento do</h3>
            <h1 className=" font-bold text-5xl md:text-7xl mt-2 text-primary">
              Site Burger
            </h1>
          </div>
          <p>
            A criação do site Burger tem como objetivo servir como um portfólio de exemplos e ideias para clientes, apresentando projetos inspiradores e personalizados que destacam inovação e funcionalidade no desenvolvimento de interfaces.
          </p>
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

        {/* img section */}
        <div>
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
