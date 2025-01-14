import React from "react";
import img from "../assets/img/menu1.png";

const MenuCard = ({ id, title, price, text }) => {
  return (
    
    <div
      className="group relative space-y-2 p-4 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md cursor-pointer hover:bg-primary transition duration-300 ease-in-out"
      key={id}
    >
       <img
        className=" absolute w-40 -right-4 sm:-right-16 bottom-7 mr-2 group-hover:-translate-y-8 transition duration-300 ease-in-out"
        src={img}
        alt="img"
      />
      <h3 className=" font-semibold text-2xl text-secondary">{price}</h3>
      <h1 className=" font-semibold text-2xl text-primary group-hover:text-black">
        {title}
      </h1>
      
      <p>
       {text}
      </p>
      
     
    </div>
    
  );
};

export default MenuCard;
