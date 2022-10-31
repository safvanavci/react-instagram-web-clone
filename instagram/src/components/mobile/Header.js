import InstagramLogo from '../icons/InstagramLogo'
import MessageIcon from '../icons/MessageIcon'
import NotificationsIcon from '../icons/NotificationsIcon'

export default function Header() {
  return (
    <div className='lg:hidden w-full bg-white border-b border-border py-2 px-2 flex justify-between'>
        <InstagramLogo/>
        <div className='flex gap-3'>
            <NotificationsIcon/>
            <MessageIcon/>

        </div>
    </div>
  )
}
