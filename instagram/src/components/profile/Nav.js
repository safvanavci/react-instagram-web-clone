import { NavLink } from 'react-router-dom'
import PostsIcon from '../icons/PostsIcon'
import SavedIcon from '../icons/SavedIcon'
import TaggedIcon from '../icons/TaggedIcon'

export default function Nav() {
    return (
        <div className='flex justify-center gap-14 text-gray text-sm  font-semibold'>
            <NavLink to={'posts'} className={({isActive})=> isActive && 'border-t border-black'}>
                <div className='flex items-center py-4'>
                    <PostsIcon />
                    <p className='ml-1.5'>GÖNDERİLER</p>
                </div>
            </NavLink >
            <NavLink to={'saved'} className={({isActive})=> isActive && 'border-t border-black'}>
                <div className='flex items-center py-4'>
                    <SavedIcon />
                    <p className='ml-1.5'>KAYDEDİLENLER</p>
                </div>
            </NavLink>
            <NavLink to={'tagged'} className={({isActive})=> isActive && 'border-t border-black'}>
                <div className='flex items-center py-4'>
                    <TaggedIcon />
                    <p className='ml-1.5'>ETİKETLENENLER</p>
                </div>
            </NavLink>
        </div>
    )
}
