import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import {useParams}  from 'react-router-dom'


function CategoriesDetails() {
    
    const {category_id} = useParams();
  
  const getCategoriesDetails = async()=>{

      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${category_id}`)
      return data;

  }
  
  const {data}= useQuery('categoriesDetails',getCategoriesDetails);
  console.log(data);
  
  
    return (
    <div>
          {category_id}
    </div>
  )
}

export default CategoriesDetails
