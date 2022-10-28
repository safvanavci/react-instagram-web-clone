import post from '../../assets/post.jpg'
import CommentIconPost from '../icons/CommentIconPost'
import LikeIcon from '../icons/LikeIcon'

export default function ContentPosts() {
  return (
    <div className='flex gap-6 flex-wrap'>
      <div className='w-[293px] h-[293px] relative rounded-sm overflow-hidden'>
        <img src={post}  className='peer' />
        <div className='hidden absolute top-0 w-full h-full bg-light-black  peer-hover:inline '>
          <div className=' w-full h-full flex justify-center items-center gap-3 text-white font-semibold'>
            <LikeIcon /> <span> 32</span>
            <CommentIconPost/> <span> 5</span>
          </div>
        </div>
      </div>
    </div>
  )
}
