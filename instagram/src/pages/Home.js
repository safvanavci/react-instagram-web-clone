import React from 'react'
import Stories from '../components/ Stories'
import Posts from '../components/Posts'
import Following from '../components/Following'
export default function Home() {
  return (
    <div className='bg-brand w-screen'>
        <div>
            <Stories/>
            <Posts/>
        </div>
        <Following/>
    </div>
  )
}
