import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../assets/avatar.jpg'
import Suggestions from './Suggestions'

export default function Rightbar() {
  return (
    <div className='hidden lg:block w-[319px] mt-7' >
      <div className='mt-4 mb-2.5 flex items-center'>
        <div className='w-[60px] h-[60px] flex items-center justify-center'>
          <NavLink to='/profile'>
            <img src={avatar} className='w-14 h-14 rounded-full' />
          </NavLink>
        </div>
        <div className='pl-3 text-sm flex-1' >
          <NavLink to='/profile'>
            <p className='font-semibold'>username</p>
          </NavLink>
          <p className=' text-gray' >User Name</p>
        </div>
        <button className='text-blue text-xs font-semibold'>
          Geçiş Yap
        </button>
      </div>
      <div className='flex items-center py-1 font-semibold'>
        <p className='text-sm text-gray flex-1'>
          Senin İçin Öneriler

        </p>
        <p className='text-xs '>
          Tümünü Gör
        </p>
      </div>
      <Suggestions />
      <Suggestions />
      <Suggestions />
      <Suggestions />
      <Suggestions />
      <div className='text-xs text-light-gray py-5 flex flex-wrap gap-x-3 gap-y-1'>
        <a href="hakkinda" className='hover:underline'>Hakkında</a>
        <a href="yardim" className='hover:underline'>Yardım</a>
        <a href="basin" className='hover:underline'>Basın</a>
        <a href="api" className='hover:underline'>API</a>
        <a href="isfirsatlar" className='hover:underline'>İş Fırsatları</a>
        <a href="gizlilik" className='hover:underline'>Gizlilik</a>
        <a href="kosullar" className='hover:underline'>Koşullar</a>
        <a href="konumlar" className='hover:underline'>Konumlar</a>
        <a href="dil" className='hover:underline'>Dil</a>

      </div>
      <div className='text-xs text-light-gray py-2' >
        <p>© 2022 INSTAGRAM FROM META</p>
      </div>
    </div>
  )
}
