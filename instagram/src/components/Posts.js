import { useState } from 'react'
import BottomPost from './posts/BottomPost';
import CommentPost from './posts/CommentPost';
import HeaderPost from './posts/HeaderPost';
import ImagePost from './posts/ImagePost';
import posts from '../utils/data/Posts.json'

export default function Posts() {

  const [list, setList] = useState([])

  return (
    <>
      {
        posts.map(
          (post, i) =>
            <div key={i} className=' bg-white border border-border rounded-lg mt-4'>
              <HeaderPost avatar={post.avatar} username={post.username} />
              <ImagePost image={post.post} />
              <BottomPost list={list} setList={setList} like={post.likes} username={post.username} explanation={post.explanation} avatar={post.avatar} image={post.post} />
              <CommentPost list={list} setList={setList}/>
            </div>
        )
      }

    </>

  )
}


