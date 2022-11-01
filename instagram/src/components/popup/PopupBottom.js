import NotificationsIcon from '../icons/NotificationsIcon'
import CommentIcon from '../icons/CommentIcon'
import SendIcon from '../icons/SendIcon'
import SaveIcon from '../icons/SaveIcon'
import {MainContext, useContext} from '../../context/Context'
import PostLike from '../icons/PostLike'


export default function PopupBottom({ like, username, explanation }) {

    const {liked, setLiked} = useContext(MainContext)

    return (
        <>
            <div className='pl-1 pb-1.5 mt-1 flex justify-between' >
                <div className='flex' >
                    <button className='w-10 h-10 p-2' onClick={() => !liked ? setLiked(true) : setLiked(false)} >
                        {!liked ? <NotificationsIcon /> : <PostLike />}
                    </button>
                    <button className='w-10 h-10 p-2'>
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
                    {!liked ? like : like + 1}
                </span>
                <span> beğenme</span>
            </div>

            <div className=' px-3 py-2 flex gap-1 mb-3'>

                <p className='text-sm font-semibold '>
                    {username}
                </p>
                <p className='text-sm'>
                    {explanation}
                </p>
            </div>
        </>
    )
}
