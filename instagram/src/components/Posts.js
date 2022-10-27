import BottomPost from './posts/BottomPost';
import CommentPost from './posts/CommentPost';
import HeaderPost from './posts/HeaderPost';
import ImagePost from './posts/ImagePost';


export default function Posts() {
  return (
    <div className='w-[470px] bg-white border border-border rounded-lg mt-4'>
      <HeaderPost/>
      <ImagePost/>
      <BottomPost/>
      <CommentPost/>
    </div>
  )
}
