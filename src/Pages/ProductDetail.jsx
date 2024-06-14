import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { ProductsData } from "../Datas/ProductsData";
import { addCart } from '../Slices/CartSlice';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [Data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const product = ProductsData.find((item) => item.id.toString() === id);
    setData(product);
  }, [id]);

  const addToCart = () => {
    dispatch(addCart(Data));
  }

  return (
    <>
    <div className="flex flex-col lg:flex-row md:justify-around  w-full py-5 md:px-14">
      {/* left */}
      <div className="flex flex-col justify-between gap-y-12 items-center  py-10   sm:p-10">
        <div className="flex flex-row justify-between lg:gap-x-40 gap-x-10 sm:gap-x-20 items-center ">
        <div className="flex flex-col gap-y-4 justify-center items-center">
          <div className="w-20 h-20 border-2 border-black/50 rounded-md p-2 hover:outline outline-blue-300 outline-3 outline-offset-2">
          <img
                    src={Data.url}
                    alt={Data.Product}
                    className="object-contain w-full h-full cursor-pointer hover:scale-105 duration-400"
                  />
          </div>
          <div className="w-20 h-20 border-2 border-black/50 rounded-md p-2 hover:outline outline-blue-300 outline-3 outline-offset-2">
          <img
                    src={Data.url}
                    alt={Data.Product}
                    className="object-contain w-full h-full cursor-pointer hover:scale-105 duration-400"
                  />
          </div>
          <div className="w-20 h-20 border-2 border-black/50 rounded-md p-2 hover:outline outline-blue-300 outline-3 outline-offset-2">
          <img
                    src={Data.url}
                    alt={Data.Product}
                    className="object-contain w-full h-full cursor-pointer hover:scale-105 duration-400"
                  />
          </div>
          <div className="w-20 h-20 border-2 border-black/50 rounded-md p-2 hover:outline outline-blue-300 outline-3 outline-offset-2">
          <img
                    src={Data.url}
                    alt={Data.Product}
                    className="object-contain w-full h-full cursor-pointer hover:scale-105 duration-400"
                  />
          </div>
        </div>
        <div>
          <div className=" w-40 h-fit ">
            <img src={Data.url} alt={Data.Product} className="object-contain w-full h-full " />
          </div>
        </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-x-4 sm:gap-x-16">
        <button onClick={addToCart} className="bg-orange-500 px-5 py-2 rounded-lg text-xs md:text-xl text-white font-semibold">
              <i className="fa fa-shopping-cart fa-lg mr-2" />
              ADD TO CART
            </button>
            <button className="bg-black px-8 py-2 rounded-lg text-xs sm:text-xl text-white font-semibold">
              <i className="fa fa-credit-card-alt fa-lg mr-2" />
              BUY NOW
            </button>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col justify-center  bg-slate-200 rounded-lg m-5 px-5 sm:px-16 py-10 " >
      <p className="font-semibold text-xl mb-3">{Data.Product}</p>
            <p className="font-medium  text-black/50 mb-14">
            <span className='text-white bg-green-700 px-2 py-0.5 rounded-sm mr-1'>{Data.rating} ★</span> Rating & <span >{Data.reviews} Reviews</span>
            </p>
            <p className="font-semibold text-3xl mb-14">₹ {Data.Sellingprice} /-</p>
            <div>
            <p className="font-semibold text-black leading-10 text-md">Description: <span className="font-medium text-black/70 text-md">{Data.Descripition}</span></p>
            <p className="font-semibold text-black leading-10 text-md">Display: <span className="font-medium text-black/70 text-md">{Data.Display}</span></p>
            <p className="font-semibold text-black leading-10 text-md">Camera: <span className="font-medium text-black/70 text-md">{Data.Camera}</span></p>
            <p className="font-semibold text-black leading-10 text-md">Battery: <span className="font-medium text-black/70 text-md">{Data.Battery}</span></p>
            <p className="font-semibold text-black leading-10 text-md">Processor: <span className="font-medium text-black/70 text-md">{Data.Processor}</span></p>
            </div>
      </div>
    </div>
    </>
  )
};

export default ProductDetail;
