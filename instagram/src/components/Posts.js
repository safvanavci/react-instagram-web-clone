import BottomPost from './posts/BottomPost';
import CommentPost from './posts/CommentPost';
import HeaderPost from './posts/HeaderPost';
import ImagePost from './posts/ImagePost';
import posts from '../utils/data/Posts.json'

export default function Posts() {


  return (
    <div className='mb-16'>
      {
        posts.map(
          (post, i) =>
            <div key={i} className=' bg-white border border-border rounded-lg mt-4'>
              <HeaderPost avatar={post.avatar} username={post.username} />
              <ImagePost image={post.post} />
              <BottomPost like={post.likes} username={post.username} explanation={post.explanation} avatar={post.avatar} image={post.post} />
              <CommentPost/>
            </div>
        )
      }

    </div>

  )
}


