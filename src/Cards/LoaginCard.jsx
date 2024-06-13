import React,{useState} from "react";
import supabase from "../supabase";
import {useDispatch} from 'react-redux';
import {setUser} from "../Slices/userSlice";
import { RiCloseLargeLine } from "react-icons/ri";

const LoaginCard = ({ IsOpen, setIsOpen }) => {

   const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const [loginType, setLoginType] = useState(true);

  const signUp = async ()=>{
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if(data.user){
      alert("Account Created")
    }
  }
  const login = async ()=>{
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if(error){
      alert(error.message)
      return;
    }
    dispatch(setUser(data.user))
  }

  return IsOpen ? (
    <div className="overlay z-50 bg-black/85 fixed bottom-0 top-0 left-0 right-0 flex flex-row justify-center items-center">

      <div className="flex flex-row sm:h-[450px] h-[460px] p-1 rounded-lg w-[410px] bg-blue-300 sm:w-[650px] mx-auto  relative">
        <div className="flex flex-col text-black w-1/3 h-full justify-between p-5 ">
          <p className="text-3xl font-semibold ">LOGIN</p>
          <p className="text-sm text-black/85 font-medium ">
            {" "}
            Get access to your Orders, Wishlist and Recommendations{" "}
          </p>
        </div>
        <div className="flex flex-col bg-white text-black w-full rounded-lg pt-10 px-6">
          <input
            type="email"
            className="Login-input bg-transparent w-full  border-black/40 border-2 rounded-md p-3 outline-none mb-8 "
            placeholder="Enter Email "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="Login-input  bg-transparent  border-black/40 border-2 rounded-md p-3 outline-none mb-3 "
            placeholder="Enter Password "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon text-sm my-2 text-black/80 font-semibold">
            By continuing, you agree to Flipkart's{" "}
            <span className="text-blue-700">Terms of Use</span> and
            <span className="text-blue-700"> Privacy Policy.</span>{" "}
          </p>
          {loginType ? (
            <button onClick={login} className=" bg-blue-900 w-fit mx-auto px-20 mt-10 rounded-md text-white font-semibold text-lg py-2">
              Login
            </button>
          ) : (
            <button onClick={signUp} className=" bg-blue-900 w-fit mx-auto px-10 mt-20 rounded-md text-white font-semibold text-lg py-2" >
              Signup
            </button>
          )}
          {loginType ? (
            <p className="text-[15px] font-semibold cursor-pointer text-blue-800 text-center mt-auto  mb-3 " onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="text-[15px] font-semibold cursor-pointer text-blue-800 text-center mt-auto mb-3 " onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="absolute right-3 top-3 cursor-pointer " onClick={() => setIsOpen(false)}>
        <RiCloseLargeLine className="text-black"/>
      </div>
      </div>
    </div>
  ) : (<></>)
};
export default LoaginCard;
