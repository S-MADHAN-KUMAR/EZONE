import React from 'react';
import {Link} from 'react-router-dom'
import { CategoryBarData } from '../Datas/Datas';

const CategoryBar = () => {
  return (
    <>
    <h1 className='text-2xl font-semibold text-black/85 ms-8 mt-20 mb-10 '>Trending Categories</h1>
    <Link to={'/Product'} >
    <div className=" w-full grid grid-flow-row grid-cols-4 sm:grid-cols-5 md:grid-cols-7 place-content-center place-items-center gap-y-5 p-4 ">
    {CategoryBarData.map((item, index) => (
            <>
            <div key={index} className=' borde w-fit flex flex-col justify-center items-center'>
             <div className='shadow-sm shadow-black/10 w-24 h-24 md:w-40 md:h-40 rounded-lg overflow-hidden mb-4'>
             <img src={item.imageSrc} alt={item.category} className='object-contain w-full h-full rounded-lg hover:scale-110 duration-400'/>
             </div>
              <h1 className='text-sm sm:text-md'>{item.category}</h1>
            </div>
            </>
          ))}
      </div>
      </Link>
    </>
  )
}

export default CategoryBar