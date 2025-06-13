// app/components/Slider.tsx
// app/components/Slider.tsx
'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="hero" role="region" aria-label="Hero slideshow">
      <Slider {...settings} className="hero-slider">
        <div>
          <Image
            src="/at.png"
            alt="Slide 1"
            className="hero-slide"
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div>
          <Image
            src="/cal.png"
            alt="Slide 2"
            className="hero-slide"
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div>
          <Image
            src="/mist.png"
            alt="Slide 3"
            className="hero-slide"
            width={1920}
            height={1080}
            priority
          />
        </div>
      </Slider>
      
    </section>
  );
}