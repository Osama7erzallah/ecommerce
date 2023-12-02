import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Categorie from './Categorie.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import './Categories.css'
export default function Categories() {

const getCategories = async()=>{

  const { data } = await axios.get(`https://ecommerce-node4.vercel.app/categories`)
return data;
}
  const {data,isLoading } = useQuery('categories',getCategories);


  if(isLoading){

return(
  <p>....loding</p>
)

  }

  return (
    <div className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={6.5}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.categories.length ? data?.categories.map((ele) =>
         <SwiperSlide className="slide" key={ele._id}>
              <img src={ele.image.secure_url} className='slide_image' alt="" />
<p className='slide_title'>{ele.name}</p>
        </SwiperSlide>

          // <Categorie _id={ele._id} image={ele.image.secure_url} name={ele.name} />

        ) : 'ther is no categories'}
      </Swiper>
     
    </div>
      )
}
