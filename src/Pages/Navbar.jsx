import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoaginCard from "../Cards/LoaginCard";
import supabase from "../supabase";
import { removeUser } from "../Slices/userSlice";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const user = useSelector((state) => state.userData.user);

  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    if (user) {
      setIsOpen(false);
    }
  }, [user]);

  const sigOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      dispatch(removeUser());
    }
  };

  const CartItems = useSelector((state) => state.cartData.cart);

  return (
    <>
      <div className="nav flex justify-around shadow-md p-3.5 z-40 bg-gray-900 items-center sticky top-0 ">
        <div className="hidden md:block">
          <NavLink to={"/"}>
            <div className="flex justify-center items-center gap-x-2 ">
              <h1 className="text-4xl text-white font-bold hover:scale-105">
                EZONE
              </h1>
              <p className="bg-yellow-400 w-fit text-sm font-semibold px-2 rounded-full text-black ">
                SHOP
              </p>
            </div>
          </NavLink>
        </div>
        <div className="hidden md:block">
          {user ? (
            <div
              onClick={sigOut}
              className="flex items-center cursor-pointer text-white rounded-md font-medium "
            >
              <div className="w-8 h-full mr-5 flex items-center justify-center ">
                <span className="text-white">
                  <img
                    src="https://cdn-icons-png.freepik.com/512/3135/3135715.png"
                    className="object-contain w-full h-full "
                  />
                </span>
              </div>
              <h3 className="text-md font-medium">
                @{user?.email.slice(0, 10)}...
              </h3>
            </div>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="text-xl font-medium text-white hover:scale-105  "
            >
              LOGIN
            </button>
          )}
        </div>
        <NavLink to={"Cart"}>
          <div className="cart hidden md:flex gap-x-10 items-center text-white ">
            <h1 className="text-xl font-medium  hover:scale-105 text-white ">
              CART
            </h1>
            <button className="font-medium">
              <i
                className={`fa fa-shopping-basket fa-lg hover:scale-105 text-yellow-400 ${
                  CartItems.length > 0 ? "hidden" : ""
                }`}
              />
              {CartItems.length > 0 && (
                <span className=" text-yellow-400 font-semibold text-lg ">
                  {CartItems.length}
                </span>
       )}
            </button>
          </div>
        </NavLink>
        <div className="w-[220px] sm:w-[250px] md:w-1/4 relative bg-white rounded-full ">
          <input
            type="text"
            placeholder="Search Products.."
            className="px-4 py-1 w-full outline-none rounded-full"
          />
          <button className="absolute top-0 right-1 w-10 h-full ">
            <i class="fa fa-search fa-lg  " />{" "}
          </button>
        </div>

        <div className="md:hidden block">
       {
        isMenuOpen ? (
          <i class="fa fa-times hover:scale-75 text-yellow-400 fa-2x" onClick={toggleMenu} />
        ) : (
          <i  className="fa hover:scale-75 fa-bars text-yellow-400 fa-2x" onClick={toggleMenu} />
        )
       }   
      
     

      {isMenuOpen && (
        <div className="fixed left-0 right-37 top-[60px] bottom-0 bg-gray-950">
          <div className="flex flex-col px-8 py-10">
            <NavLink to={'/'}>
            <div className="flex items-center gap-x-2">
              <h1 className="text-4xl text-white font-bold hover:scale-105">
                EZONE
              </h1>
              <p className="bg-yellow-400 w-fit text-sm font-semibold px-2 rounded-full text-black">
                SHOP
              </p>
            </div></NavLink>
            <div className="text-white mt-16 mx-auto">
              {/* Login */}
              <div className="flex flex-row items-center mb-8 border-2 p-2 rounded-md border-gray-600 ">
                {user ? (
                  <div
                    onClick={sigOut}
                    className="flex items-center cursor-pointer text-white rounded-md font-medium"
                  >
                    <div className="w-8 h-full mr-5 flex items-center justify-center">
                      <span className="text-white">
                        <img
                          src="https://cdn-icons-png.freepik.com/512/3135/3135715.png"
                          className="object-contain w-full h-full"
                        />
                      </span>
                    </div>
                    <h3 className="text-md font-medium">
                      @{user?.email.slice(0, 10)}...
                    </h3>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsOpen(true)}
                    className="text-xl font-medium text-white hover:scale-105"
                  >
                    LOGIN
                  </button>
                )}
              </div>
              {/* Cart */}
              <NavLink to={"Cart"}>
                <div className="cart flex gap-x-10 items-center text-white mb-5  border-2 p-2 rounded-md border-gray-600 ">
                  <h1 className="text-xl font-medium hover:scale-105 text-white">
                    CART
                  </h1>
                  <button className="font-medium">
                    <i
                      className={`fa fa-shopping-basket fa-lg hover:scale-105 text-yellow-400 ${
                        CartItems.length > 0 ? "hidden" : ""
                      }`}
                    />
                    {CartItems.length > 0 && (
                      <span className="text-yellow-400 font-semibold text-lg">
                        {CartItems.length}
                      </span>
                    )}
                  </button>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
      </div>
      <LoaginCard IsOpen={IsOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
