
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      title: "Tango Burger",
      price: "$29",
      text: "2 hamburguer, ovo, salsicha, alface, tomate  queijo",
      
    },
    {
      id: 2,
      price: "$25",
      title: "Punch Burger",
      text: "2 hamburguer, ovo, salsicha, alface, tomate  queijo",
      
    },
    {
      id: 3,
      title: "Crunch Burger",
      price: "$20",
      text: "2 hamburguer, ovo, salsicha, alface, tomate  queijo",
    },
    {
      id: 4,
      title: "Carnival Burger",
      price: "$42",
      text: "2 hamburguer, ovo, salsicha, alface, tomate  queijo",
    },
    {
      id: 5,
      title: "Twist Burger",
      price: "$40",
      text: "2 hamburguer, ovo, salsicha, alface, tomate  queijo",
    },
    {
      id: 6,
      title: "Burst Burger",
      price: "$45",
      text: "2 hamburguer, ovo, salsicha, alface, tomate  queijo",
    },
  ];

  return (
    <div className="bg-tertiary dark:bg-black">
      <div className="min-h-screen container flex flex-col justify-center py-4">
        {/* heading  */}
        <h1 className=" font-semibold text-4xl text-center text-secondary mt-5">
          Hamburguer
        </h1>

        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 text-[12px] pt-8">
          {menuData.map((item) => {
            return (
              <MenuCard key={item.id} title={item.title} price={item.price} text={item.text} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
