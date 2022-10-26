import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../assets/avatar.jpg'
import CreateIcon from '../assets/CreateIcon'
import ExploreIcon from '../assets/ExploreIcon'
import HomeIcon from '../assets/HomeIcon'
import InstagramLogo from '../assets/InstagramLogo'
import MessageIcon from '../assets/MessageIcon'
import MoreIcon from '../assets/MoreIcon'
import NotificationsIcon from '../assets/NotificationsIcon'
import SearchIcon from '../assets/SearchIcon'

export default function Sidebar() {
  return (
    <div className='w-[400px] h-screen px-3 py-2  border-r border-border sticky top-0'>
      <div className='py-6 px-3 mb-5'>
        <NavLink to="/">
          <InstagramLogo/>
        </NavLink>
      </div>
      <ul className='h-inherit'>
        <NavLink to="/">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
           <HomeIcon/>
            <p className='pl-4'>Ana Sayfa</p>
          </li>
        </NavLink>
        <NavLink to="/">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <SearchIcon/>
            <p className='pl-4'>Ara</p>
          </li>
        </NavLink>
        <NavLink to="/">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <ExploreIcon/>
            <p className='pl-4'>Keşfet</p>
          </li>
        </NavLink>
        <NavLink to="/">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <MessageIcon/>
            <p className='pl-4'>Mesajlar</p>
          </li>
        </NavLink>
        <NavLink to="/">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <NotificationsIcon/>
            <p className='pl-4'>Bildirimler</p>
          </li>
        </NavLink>
        <NavLink to="/">
          <li className='p-3 my-4 flex items-center rounded-full hover:bg-brand }'>
            <CreateIcon/>
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
        <li className='p-3 mb-6 my-4 flex items-center rounded-full hover:bg-brand absolute  bottom-0 }'>
          <MoreIcon/>
          <p className='pl-4'>Daha Fazla</p>
        </li>
      </ul>
    </div>
  )
}
