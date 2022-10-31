import React from 'react'
import Stories from '../components/ Stories'
import Posts from '../components/Posts'
import Rightbar from '../components/Rightbar'
export default function Home() {
  return (
    <div className='bg-brand lg:w-screen w-screen flex justify-center'>
        <div className='lg:w-[470px] w-full px-3 lg:px-0 lg:mr-8'>
            <Stories/>
            <Posts/>
        </div>
        <Rightbar/>
    </div>
  )
}
