import React, { useState } from "react";
import { ProductsData } from "../Datas/ProductsData";
import { Link} from "react-router-dom";


const HomeProduct = () => {


  

  const [category, setCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredProducts =
    category === "all"
      ? ProductsData
      : ProductsData.filter((product) => product.category === category);
  return (
    <div className=" rounded-xl mx-auto mt-40">
      <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-center items-center w-fit gap-x-8 gap-y-10 pt-20 sm:ms-12 ">
        <button
          className={`hover:scale-105  sm:text-[23px] font-semibold text-black/85 pb-2  ${
            category === "all" ? "text-blue-500 border-b-[3px] border-blue-500" : ""
          }`}
          onClick={handleCategoryChange}
          value="all"
        >
          Trending Categories Products
        </button>

        <button
          className={`hover:scale-110 sm:text-[23px] font-semibold text-black/85 pb-2  ${
            category === "Iphones" ? "text-blue-500 border-b-[3px] border-blue-500" : ""
          }`}
          onClick={handleCategoryChange}
          value="Iphones"
        >
          Iphones
        </button>

        <button
          className={`hover:scale-110 sm:text-[23px] font-semibold text-black/85 pb-2  ${
            category === "Android" ? "text-blue-500 border-b-[3px] border-blue-500" : ""
          }`}
          onClick={handleCategoryChange}
          value="Android"
        >
          Android
        </button>
      </div>

      <div className="flex flex-wrap gap-20 p-5 w-full  justify-center items-center mt-20">
        {filteredProducts.map((item, index) => (
           <Link key={index} to={`/ProductDetail/${item.id}`}>
            <div className="flex flex-col sm:w-[370px] h-fit p-2.5 rounded-xl bg-slate-200 shadow-sm shadow-black/25">
             
              <div className=" h-60 p-4 rounded-lg bg-white">
                <img
                  src={item.url}
                  alt={item.Product}
                  className="object-contain w-full h-full mx-auto hover:scale-110 duration-500"
                />
              </div>
              <p className="text-md font-medium p-4">{item.Product}</p>
              <div className="px-5 flex flex-row justify-between text-white items-center mt-auto m-4 ">
                <p className="text-2xl font-bold text-black">
                  ₹ {item.Sellingprice}
                </p>
                <p className="text-white bg-green-700 px-2 py-0.5 rounded-sm mr-3">
                  {item.rating} ★
                </p>
              </div>
              <button  className="mt-8 hover:scale-105 bg-blue-600 rounded-md font-semibold py-1.5 px-5 text-md text-white  m-4">
                Buy Now <i class="fa fa-long-arrow-right text-white ms-4 "/>
              </button>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
