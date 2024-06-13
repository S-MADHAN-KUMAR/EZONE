import React from 'react'

const Banner = () => {
  return (
   <>
   <div className="flex md:flex-row flex-col justify-between m-5 mx-20">
   <div>
      <p className='text-6xl font-bold text-slate-900 mb-8'>Affordable Mobile Phones</p>
      <p className='text-2xl text-black/60 font-medium w-4/5 mb-10'>Explore the latest models and best deals on smartphones at MobileSlaing.</p>
      <button className='bg-blue-700 px-8 font-bold text-white py-2 text-lg rounded-full hover:scale-105 duration-200'>
      Shop Now
      </button>
    </div>
    <div className='w-[700px] h-80 overflow-hidden rounded-xl '>
      <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMzczODV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTgyOTM5MjN8&ixlib=rb-4.0.3&q=80&w=1080" alt="banner" className='rounded-xl hover:scale-110 duration-1000' />
    </div>
   
   </div>
   </>
  )
}

export default Banner