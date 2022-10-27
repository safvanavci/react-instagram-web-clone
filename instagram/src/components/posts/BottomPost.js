import NotificationsIcon from '../icons/NotificationsIcon'
import CommentIcon from '../icons/CommentIcon'
import SendIcon from '../icons/SendIcon'
import SaveIcon from '../icons/SaveIcon'

export default function BottomPost() {
    return (
        <>
            <div className='pl-1 pb-1.5 mt-1 flex justify-between' >
                <div className='flex' >
                    <div className='w-10 h-10 p-2' >
                        <NotificationsIcon />
                    </div>
                    <div className='w-10 h-10 p-2' >
                        <CommentIcon />
                    </div>
                    <div className='w-10 h-10 p-2' >
                        <SendIcon />
                    </div>
                </div>
                <div className='w-10 h-10 p-2' >
                    <SaveIcon />
                </div>
            </div>

            <div className='text-sm font-semibold px-3 '>
                <span>21</span>
                <span> beğenme</span>
            </div>

            <div className=' px-3 py-2 flex gap-1'>

                <p className='text-sm font-semibold '>
                    username
                </p>
                <p className='text-sm'>
                    Sokaktan bir görüntü
                </p>
            </div>
        </>
    )
}
