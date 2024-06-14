import React from 'react';
import CategoryBar from './CategoryBar';
import HomeProduct from './HomeProduct';
import CategoryBar2 from './CategoryBar2';
import BannerCarousel from '../Cards/BannerCarousel';


const Home = () => {
  return <>
  <div className='overflow-x-hidden ' >
  <BannerCarousel/>
  <CategoryBar/>
  <CategoryBar2/>
  <HomeProduct/>
  </div>
  </>

}

export default Home