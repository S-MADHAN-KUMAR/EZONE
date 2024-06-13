import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>      
    <div className="bg-gray-900 mt-20">
      <div className="flex flex-col sm:flex-row justify-between gap-y-10 items-center mb-5 pt-10 px-10">
      <Link to={'/'}>
        <div className="flex  hover:scale-105 flex-row justify-center items-center ">
          <p className="text-5xl font-bold text-white mr-2">EZONE</p>
          <p className="text-md bg-yellow-500 font-bold px-3 rounded-full ">SHOP</p>
        </div></Link>
        <div className="flex flow-row justify-center items-center ">
        <a
              href="https://www.linkedin.com/in/madhan---kumar/"
              target="_blank"
            >
              <img
                className=" hover:scale-110"
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a
              href="https://github.com/MADHAN-KUMAR-161?tab=repositories"
              target="_blank"
              className=" border-white/40 ps-8"
            >
              <img
                className=" hover:scale-110"
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/github.png"
                alt="github"
              />
            </a>
            <a
              href="mailto:s.madhankumar161@gmail.com"
              target="_blank"
              className=" border-white/40 ps-8"
            >
              <img
                className=" hover:scale-110"
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/gmail.png"
                alt="gmail"
              />
            </a>
            <a
              href="https://wa.me/918610488281?text=Hi"
              target="_blank"
              className=" border-white/40 ps-8"
            >
              <img
                className=" hover:scale-110"
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/whatsapp.png"
                alt="whatsapp"
              />
            </a>
        </div>
      </div>
      <p className="text-white/60 text-center py-4">  © 2024 EZONE . All rights reserved.</p>
</div>
    </>
  );
};

export default Footer;