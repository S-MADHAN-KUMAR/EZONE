import React from 'react'

const ProductCard = ({Data}) => {
  return (
        <div className="flex flex-col md:flex-row justify-between  border-8 bg-slate-200 border-slate-200 rounded-lg sm:w-11/12 w-[270px]  mx-auto shadow-sm shadow-black/30">
            <div className="flex flex-col md:flex-row items-center overflow-hidden sm:w-full">
                <div className='p-5 h-full w-full  flex justify-center items-center bg-white rounded '>
                    <img src={Data.url} alt={Data.Data} className='object-contain w-[200px] h-[200px] hover:scale-110 duration-700'/>
                </div>
                <div className="flex flex-col justify-center bg-slate-200  h-full px-5 py-4 w-full">
                    <p className='text-black text-lg md:text-[20px] font-semibold mb-4'>{Data.Product}</p>
                    <p  className='text-black/80 text-[15px] font-medium mb-10'><span className='text-white bg-green-700 px-2 py-0.5 rounded-sm mr-1'>{Data.rating} ★</span> Rating & <span >{Data.reviews} Reviews </span></p>
                   <div className='flex flex-col w-full justify-center gap-y-2 text-black text-[15px] font-medium mx-auto'>
                   <p>{Data.Descripition}</p>
                    <p >{Data.Display}</p>
                    <p >{Data.Camera}</p>
                    <p >{Data.Battery}</p>
                    <p >{Data.Proccessor}</p>
                   </div>
                </div>
            </div>
            <div className=" flex flex-col justify-center bg-slate-200  sm:px-5 mx-auto">
               <div className='flex flex-row gap-x-8 sm:gap-x-16 mb-8 items-center '>
               <div className='text-black font-semibold text-2xl'>₹{Data.Sellingprice} </div>
               <div className="flex justify-center items-center gap-x-2 ">
              <h1 className="text-[23px] text-black/85 font-bold hover:scale-105">
                EZONE
              </h1>
              <p className="bg-yellow-400 text-[11px] font-semibold px-2 rounded-full text-black ">
                SHOP
              </p>
              
            </div>
             
              </div>
              <div className='mx-auto '>
              <p className='text-black/60 font-medium text-sm w-full py-4'>Up to {Data.Orginalprice} % Offers Available </p>
              </div>
              </div>
        </div>
  )
}

export default ProductCard