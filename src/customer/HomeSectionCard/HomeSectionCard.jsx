import React from "react";

const HomeSectionCard = ({product}) => {
  return (
    <div 
    className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div 
      className=" w-[10rem]">
        <img
          className="object-cover object-top w-full h-nfull max-h-50 h-[100]"
          src={product.imageUrl}
          alt={product.title}    
          style={{height:'200px'}}   
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500 white">
          {product.title}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
