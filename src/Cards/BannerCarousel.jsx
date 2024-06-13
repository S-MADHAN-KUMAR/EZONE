import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from '../Datas/Datas';

const BannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      };

  return (
    <div>
        <Slider {...settings}>
        {Carousel.map((item) => (
          <div key={item.id}>
            <img src={item.Imgsrc} alt="banner"  />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default BannerCarousel