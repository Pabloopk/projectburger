
import img from "../assets/img/deals.jpg";

const About = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className=" min-h-screen container flex flex-col justify-center pt-16 md:pt-0">
        {/* heading  */}
        <h1 className=" font-semibold text-4xl text-center text-secondary mt-5">
          Devs Burger
        </h1>
{/**combo 1 */}
        <div className=" flex flex-col md:flex-row gap-10 mt-8">
         

          {/* content section  */}
          <div className=" w-full md:w-2/4 text-center md:text-start space-y-4">
            <h1 className=" text-4xl md:text-5xl font-bold text-primary">
              Sobre 
            </h1>
            <h3 className=" text-3xl md:text-4xl font-semibold text-secondary">
              Nossa hstoria
            </h3>
            <p className=" text-sm md:text-base text-gray-400">
              Com foco no melhor hambúrguer, o site oferece uma experiência visual e informativa que desperta o apetite e encanta os clientes.
            </p>
            <p className="text-sm md:text-base text-gray-400">
              Se a preferência for pela história da empresa, o site se transforma em um espaço para compartilhar suas origens, valores e conquistas.
            </p>
   
            <button className=" bg-primary py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out">
              Contato
            </button>
          </div>
                    <div className=" w-full md:w-2/4">
            <img className="rounded-lg" src={img} alt="img" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
