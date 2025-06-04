import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import './slider.css'

register();

export const MyComponent = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => { });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      pagination="true"
      autoplay
    >
      <swiper-slide><img src="https://www.sugarcosmetics.com/cdn/shop/files/BTR-Eyeshadow-Palette-LP--1600x400_1.gif?v=1734581554&width=1600" alt="" /></swiper-slide>
      <swiper-slide><img src="https://www.sugarcosmetics.com/cdn/shop/files/Clearance-Range-Products-LP-1600x400_2.gif?v=1737973789&width=1600" alt="" /></swiper-slide>
    </swiper-container>
  );
};