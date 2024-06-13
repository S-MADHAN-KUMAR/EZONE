import React from 'react';
import CategoryBar from './CategoryBar';
import HomeProduct from './HomeProduct';
import CategoryBar2 from './CategoryBar2';
import BannerCarousel from '../Cards/BannerCarousel';


const Home = () => {
  return <>
  <BannerCarousel/>
  <CategoryBar/>
  <CategoryBar2/>
  <HomeProduct/>
  </>
}

export default Home