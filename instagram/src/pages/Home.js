import React from 'react'
import Stories from '../components/ Stories'
import Posts from '../components/Posts'
import Rightbar from '../components/Rightbar'
export default function Home() {
  return (
    <div className='bg-brand w-screen flex justify-center'>
        <div className='mr-8'>
            <Stories/>
            <Posts/>
        </div>
        <Rightbar/>
    </div>
  )
}
