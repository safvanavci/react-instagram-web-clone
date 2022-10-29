import avatar from '../../assets/avatar.jpg'

export default function PopupComments() {
  return (
    <div className='flex'>
      <div className='mr-5'>
        <img src={avatar} className='w-8 h-8 rounded-full' />
      </div>
      <div className='text-sm font-normal flex-1'>
        <span className=' font-semibold mr-2'>
          username
        </span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sunt sequi! Dicta sequi possimus, iure minima amet at soluta! Quam!</span>
      </div>
    </div>
  )
}
