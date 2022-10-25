import React from 'react'
import Stories from '../components/ Stories'
import Posts from '../components/Posts'
import Following from '../components/Following'
export default function Home() {
  return (
    <>
        <div>
            <Stories/>
            <Posts/>
        </div>
        <Following/>
        
    </>
  )
}
