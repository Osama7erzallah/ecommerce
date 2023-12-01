import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Categorie({name,image,_id}) {
  return (
      <SwiperSlide className="slide" key={_id}>
              <img src={image} className='slide_image' alt="" />
<p className='slide_title'>{name}</p>
        </SwiperSlide>

  )
}
