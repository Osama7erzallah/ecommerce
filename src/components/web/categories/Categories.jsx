import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Categorie from './Categorie.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Categories.css'
import { Link } from 'react-router-dom';
export default function Categories() {

const getCategories = async()=>{

  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=50`)
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
        slidesPerView={5.5}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.categories.length ? data?.categories.map((ele) =>
       
       <SwiperSlide className="slide" key={ele._id}>
            <Link to={`/products/category/${ele._id}`} >
              <img src={ele.image.secure_url} className='slide_image' alt="" />

            </Link>{/* <p className='slide_title'>{ele.name}</p> */}
        </SwiperSlide>

          // <Categorie _id={ele._id} image={ele.image.secure_url} name={ele.name} />

        ) : 'ther is no categories'}
      </Swiper>
     
    </div>
      )
}
