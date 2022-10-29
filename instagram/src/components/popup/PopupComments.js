import avatar from '../../assets/avatar.jpg'

export default function PopupComments({ comments }) {
  return (
    <div className='flex mb-5'>
      <div className='mr-5'>
        <img src={avatar} className='w-8 h-8 rounded-full' />
      </div>
      <div className='text-sm font-normal flex-1'>
        <span className=' font-semibold mr-2'>
          username
        </span>
        <span>{comments.comm}</span>
      </div>
    </div>
  )
}
