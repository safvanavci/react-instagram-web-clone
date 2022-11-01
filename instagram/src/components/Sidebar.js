import { NavLink } from 'react-router-dom'
import avatar from '../assets/avatar.jpg'
import CreateIcon from './icons/CreateIcon'
import ExploreIcon from './icons/ExploreIcon'
import HomeIcon from './icons/HomeIcon'
import InstagramLogo from './icons/InstagramLogo'
import MessageIcon from './icons/MessageIcon'
import MoreIcon from './icons/MoreIcon'
import NotificationsIcon from './icons/NotificationsIcon'
import SearchIcon from './icons/SearchIcon'
import PopupSidebar from './PopupSidebar'
import {MainContext, useContext} from '../context/Context'



export default function Sidebar() {

  const {pop, setPop} = useContext(MainContext)

  const showHide = ()=>{
    if(pop == ''){
      setPop('!block')
    }
    else{
      setPop('')
    }
  }


  return (
    <div className='hidden lg:block w-[400px] h-screen px-3 py-2  border-r border-border sticky top-0'>
     <div className='py-6 px-3 mb-5'>
        <NavLink to="/">
          <InstagramLogo />
        </NavLink>
      </div>
      <ul className='h-inherit'>
        <NavLink to="/">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <HomeIcon />
            <p className='pl-4'>Ana Sayfa</p>
          </li>
        </NavLink>
        <NavLink to="ara">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <SearchIcon />
            <p className='pl-4'>Ara</p>
          </li>
        </NavLink>
        <NavLink to="kesfet">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <ExploreIcon />
            <p className='pl-4'>Keşfet</p>
          </li>
        </NavLink>
        <NavLink to="mesajlar">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <MessageIcon />
            <p className='pl-4'>Mesajlar</p>
          </li>
        </NavLink>
        <NavLink to="bildirimler">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <NotificationsIcon />
            <p className='pl-4'>Bildirimler</p>
          </li>
        </NavLink>
        <NavLink to="olustur">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <CreateIcon />
            <p className='pl-4'>Oluştur</p>
          </li>
        </NavLink>
        <NavLink to="/profile">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <div className='w-6 h-6 rounded-full overflow-hidden ' >
              <img src={avatar} />
            </div>
            <p className='pl-4'>Profil</p>
          </li>
        </NavLink>
        <li className=' cursor-pointer p-3 mb-6 my-4 flex items-center rounded-full hover:bg-brand absolute bottom-0 ' onClick={showHide}>
          <PopupSidebar />
          <MoreIcon />
          <p className='pl-4'>
            Daha Fazla
          </p>
        </li>
      </ul>
    </div>
  )

}
