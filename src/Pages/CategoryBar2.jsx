import React from 'react'
import { CategoryBarData2 } from '../Datas/Datas'
import { Link } from 'react-router-dom'

const CategoryBar2 = () => {
  return (
    <>
    <div className="w-fit mx-auto grid grid-flow-row grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-6 m-5 mt-20 ">
        {
            CategoryBarData2.map((item,index)=>(
              <Link to={'/Product'} >
                <div key={index} className='w-[300px] sm:w-[400px] h-fit overflow-hidden  relative rounded-lg shadow-sm shadow-black/20'>
                    <img src={item.Imgsrc} alt={item.title} className=' w-full h-full hover:scale-150 duration-1000 '/>
                    <p className='text-2xl absolute top-12 left-6 font-medium text-wrap w-1/2  '>{item.title}</p>
                    <p className='absolute text-md text-black/70 top-36 left-6 '>From $ 399.00</p>
                    <button className='absolute top-52 left-8 text-md font-semibold text-white bg-blue-600 rounded-full px-3 py-1 '>Buy Now</button>
                </div></Link>
            ))
        }
    </div>
    </>
  )
}

export default CategoryBar2