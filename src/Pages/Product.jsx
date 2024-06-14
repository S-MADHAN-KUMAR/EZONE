import React from 'react';
import { ProductsData } from '../Datas/ProductsData';
import ProductCard from '../Cards/ProductCard';
import {Link} from 'react-router-dom';
import Banner from './Banner';

const Product = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full '>
      <div className='w-full mt-20 mb-24 '>
        <Banner/>
      </div>
      <div className=' flex flex-col justify-center w-full h-fit mx-auto gap-10 my-20'>
        <p className='mb-10 text-2xl sm:text-3xl font-semibold ps-5 sm:ps-16 text-slate-800 '>Our Latest Mobiles</p>
        {
          ProductsData.map((item,index)=>(
          <Link key={index} to={`/ProductDetail/${item.id}`}>
            <ProductCard Data={item} />
            </Link>
         ))
        }
    </div>
    </div>
  )
}

export default Product