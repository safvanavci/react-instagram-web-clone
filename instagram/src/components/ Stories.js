import React from 'react'
import Slider from "react-slick";
import UsersStory from './UsersStory';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  initialSlide: 0,  
}

export default function Stories() {

  return (
    <div className='bg-white py-4 border border-border rounded-lg lg:mt-6 mt-2 slide'>

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
