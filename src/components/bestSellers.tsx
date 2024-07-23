// import React from 'react';
import { Link } from "react-router-dom";
import { IProduct } from "../interface/Product";

type Props = {
  products: IProduct[];
};

const BestSellers = ({ products }: Props) => {
  const topSellingProducts = products
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 4);
  
  return (
    <div>
      <p className="ml-40 mt-7 font-bold font-sans text-3xl text-green-900/70">
        Best sellers
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-5 shadow-lg drop-shadow-mb bg-white mb-10 ">
        {topSellingProducts.map((product) => (
          <Link to={`/product/${product.id}`}>
            <div
              key={product.id}
              className="relative product-item flex flex-col w-64"
            >
              <div className="h-[300px] w-64 overflow-hidden relative">
                {product.sale && (
                  <span className="absolute top-8 left-0 bg-blue-950 text-white text-xs px-2 py-1 ">
                    SALE
                  </span>
                )}
                <img
                  className="  w-45  mt-9 hover:scale-110 duration-500"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <h3 className="top-[20px] left-0 w-auto py-2 font-semibold text-[14px] px-4 my-4">
                {product.name}
              </h3>
              <div className=" flex justify-between w-full mb-5 px-4 pb-2">
                <p className="text-[#777777] text-[12px]">{product.category}</p>
                {product.sale ? (
                  <>
                    <p>
                      <span>$</span>
                      {product.salePrice}
                    </p>
                  </>
                ) : (
                  <p>
                    <span>$</span>
                    {product.price}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
