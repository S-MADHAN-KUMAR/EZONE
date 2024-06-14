import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../Slices/CartSlice";
import LoaginCard from "../Cards/LoaginCard";

const Cart = () => {

  const CartItems = useSelector((state) => state.cartData.cart);
  const user = useSelector((state) => state.userData.user);

  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(removeCart(id));
  };

  const totalPrice = CartItems.reduce(
    (total, item) => total + parseFloat(item.Sellingprice),
    0
  );
  
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setIsOpen(false);
    }
  }, [user]);
  

  return (
    <div className="my-10 overflow-x-hidden ">

{/* cart */}

  { user ? ( <>
    
    <p className='text-2xl font-semibold text-center my-16 ' >Your Total Carts : <span className={CartItems < 1 ? "text-red-500 ms-3  " : "text-green-500  ms-3 "} >{CartItems.length}</span></p>
    
    <div className="flex mx-auto flex-col-reverse md:flex-row gap-5 justify-center  p-5">
     <div className='w-fit mx-auto items-center sm:w-4/5 flex flex-col justify-center gap-y-10 '>
     {
      CartItems.map((item,index)=>(
     <div key={index} className="flex flex-col sm:flex-row bg-slate-200 border-slate-200 border-[6px] rounded-lg shadow-md shadow-black/20">
     <div className='bg-white md:w-fit h-full flex justify-center items-center  p-6 rounded-lg'>
        <img src={item.url} alt={item.Product} className='object-contain w-48  h-48 hover:scale-110 transition-all 5s' />
      </div>

      <div className="flex flex-col justify-center font-medium text-[16px]  text-black/80 h-full p-5 ">
      <p className='text-xl font-semibold text-black mb-2'>{item.Product}</p>
       <p className='text-2xl font-semibold text-green-500 mb-6'>₹  {item.Sellingprice}</p>
        <div className='leading-8'>
        <p>{item.Descripition}</p>
        <p>{item.Display}</p>
        <p>{item.Camera}</p>
        <p>{item.Battery}</p>
        <p>{item.Proccessor}</p>
        </div>
      </div>
      <div className='flex md:flex-col justify-around items-center p-2 sm:p-5 h-full gap-x-5 '>
      <div className="flex justify-center items-center gap-x-2 ">
              <h1 className="text-[23px] text-black font-bold hover:scale-105">
                EZONE
              </h1>
              <p className="bg-yellow-400 text-[11px] font-semibold px-2 rounded-full text-black">
                SHOP
              </p>
            </div>
        <button onClick={() => removeToCart(item.id)} className='bg-orange-600 font-bold text-white text-lg px-3 py-1 rounded-md  hover:scale-110'>Remove </button>
      </div>
     </div>
      ))
    }
    </div>
    <div className="w-2/5 h-full">
    <div className="flex flex-col justify-center items-center text-center mx-auto border-[6px] border-slate-200 w-[280px] sm:w-[400px] rounded-lg shadow-md shadow-black/20">
    <p className='text-2xl font-semibold text-center  w-full h-full my-8'>Order Summary</p>
    <div className="flex flex-col  w-full  h-full py-10 bg-slate-200  border-t-2 border-slate-200 ">
      <p className=' text-xl font-semibold text-black/90  mb-8'>Total Order : <span className={CartItems < 1 ? "text-red-600 ms-14  " : "text-green-500   ms-14  "} >{CartItems.length}</span></p>
      <p className=' text-black/90 text-xl font-semibold  '>Total Price : <span className={totalPrice < 1 ? "text-red-600 ms-14  " : "text-green-500  ms-14  "} >₹{totalPrice}</span> </p>
    </div>
    </div>
    </div>
   </div> </>) :(
    <div>
      <div className="w-[300px] sm:w-[350px] h-[350px] mx-auto ">
        <img src="https://img.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg" alt="no-cart" className="object-contain w-full h-full "/>
      </div>
      <p className="text-2xl font-semibold text-center mb-5 mt-8">Missing Cart items ?</p>
      <p className="text-[15px] font-semibold mb-6 text-black/80 text-center">Login to see items you previously added</p>
      <div className="w-fit mx-auto">
      <button onClick={() => setIsOpen(true)} className="bg-blue-800 text-[24px] rounded-md font-semibold text-white 
       px-20 py-2  hover:scale-110">Login</button>
      </div>
    </div>
   )}
   <LoaginCard IsOpen={IsOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default Cart;
