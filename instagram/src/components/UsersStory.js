import React from 'react'
import avatar from "../assets/avatar.jpg"

export default function UsersStory() {
    return (
        <div className='!w-[67px] text-xs text-center' >
            <div className='w-[60px] h-[60px] mb-1 flex justify-center items-center bg-black rounded-full bg-gradient-to-tr from-yellow via-orange to-purple ' >
                <div className='border-2 w-14 h-14 border-white rounded-full overflow-hidden'>
                    <img className='w-14 h-14 ' src={avatar}></img>
                </div>
            </div>
            <p className='overflow-hidden text-ellipsis'>username</p>
        </div>
    )
}
