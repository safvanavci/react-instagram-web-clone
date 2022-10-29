import NotificationsIcon from '../icons/NotificationsIcon'
import CommentIcon from '../icons/CommentIcon'
import SendIcon from '../icons/SendIcon'
import SaveIcon from '../icons/SaveIcon'
import { useState } from 'react'
import PostLike from '../icons/PostLike'
import Popup from '../Popup'

export default function BottomPost({ like, username, explanation, avatar, image }) {
    
    const [liked, setLiked] = useState(false);
    const [popup, setPopup] = useState(false)

    return (
        <>
            <div className='pl-1 pb-1.5 mt-1 flex justify-between' >
                <div className='flex' >
                    <button className='w-10 h-10 p-2' onClick={() => !liked ? setLiked(true) : setLiked(false)} >
                        {!liked ? <NotificationsIcon /> : <PostLike />}
                    </button>
                    <button className='w-10 h-10 p-2' onClick={() => setPopup(true)} >
                        <CommentIcon />
                    </button>
                    <div className='w-10 h-10 p-2' >
                        <SendIcon />
                    </div>
                </div>
                <div className='w-10 h-10 p-2' >
                    <SaveIcon />
                </div>
            </div>

            <div className='text-sm font-semibold px-3 '>
                <span>
                    {!liked ? like : like+1}
                </span>
                <span> beğenme</span>
            </div>

            <div className=' px-3 py-2 flex gap-1'>

                <p className='text-sm font-semibold '>
                    {username}
                </p>
                <p className='text-sm'>
                    {explanation}
                </p>
            </div>
            <Popup popup={popup} setPopup={setPopup} liked={liked} setLiked={setLiked} username={username} avatar={avatar} image={image} like={like} explanation={explanation}/>
        </>
    )
}
