import React from 'react'
import Slider from "react-slick";
import UsersStory from './UsersStory';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  initialSlide: 0,  
}

export default function Stories() {

  return (
    <div className='w-[470px] bg-white py-4  border border-border rounded-lg mt-6'>

      <Slider  {...settings} >
        <UsersStory/>
        <UsersStory/>
        <UsersStory/>
        <UsersStory/>
        <UsersStory/>
        <UsersStory/>
        <UsersStory/>
        <UsersStory/>
        <UsersStory/>
        <UsersStory/>   
      </Slider>
      
    </div>
  )
}
