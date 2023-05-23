"use client"

import clsx from 'clsx';
import { FC, ReactNode, forwardRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';

const ThemedSwiper:FC<{slideContent: ReactNode[]}> = ({slideContent}) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      grabCursor={true}
      centeredSlides={true}
      loop={slideContent.length >= 4}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        }
      }}
      // autoHeight
      // wrapperClass='relative'
    >
      {slideContent.map((content, i) => (
        <SwiperSlide key={i} className='p-8 h-[auto_!important]'>
          <div className='h-full border-2 rounded-2xl bg-themeBlack/90 px-4 md:px-14 py-8'>
            {content}
          </div>
        </SwiperSlide>
      ))}
      <div className='flex justify-between w-full absolute bottom-16 left-0 px-[11%] md:px-[30%] lg:px-[32%]'>
        <SwiperButton type="prev" />
        <SwiperButton type="next" />
      </div>
    </Swiper>
  )
}

export default ThemedSwiper;

const SwiperButton: FC<{ type?: "prev" | "next" }> = ({ type }) => {
  const swiper = useSwiper();

  const getType = () => {
    switch (type) {
      case "prev": return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 34" className='w-8 h-8 -ml-1'>
          <path d="m17.0834 33.6668-16.666652-16.6666 16.666652-16.666704 2.5417 2.569414-14.09727 14.09729 14.09727 14.0972z" />
        </svg>
      );
      case "next": return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 34" className='w-8 h-8 ml-1'>
          <path d="M2.90277 33.6112L0.361145 31.0417L14.4584 16.9445L0.361145 2.84725L2.90277 0.277832L19.5694 16.9445L2.90277 33.6112Z" />
        </svg>
      );
    }
  }
  const handleClick = () => {
    switch (type) {
      case "prev": {
        swiper.slidePrev()
        break;
      }
      case "next": {
        swiper.slideNext()
        break;
      }
    }
  }

  return (
    <button
      className={clsx(
        "border-2 border-themeSkyBlue fill-themeSkyBlue duration-300",
        "hover:border-themePink hover:fill-themePink",
        "rounded-full h-12 w-12 flex justify-center items-center",
        "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] z-20 ",
      )}
      onClick={handleClick}
    >
      {getType()}
    </button>
  )
}