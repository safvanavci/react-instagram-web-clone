import avatar from '../assets/avatar.jpg'
import {MainContext, useContext} from '../context/Context'

export default function Suggestions() {

    const {setfollow, follow } = useContext(MainContext)

    return (
        <div className='flex py-1.5 pl-1 items-center' >
            <img src={avatar} className='w-8 h-8 rounded-full' />

            <div className='pl-3 text-sm flex-1' >
                <p className='font-semibold'>username</p>
                <p className='text-xs text-gray' >Senin için öneriliyor</p>
            </div>
            <button className='text-blue text-xs font-semibold disabled:text-opacity-50'  onClick={()=> setfollow(follow ? false : true)}>
                {follow && "Takip Et"|| <p className='text-black'> İstek Gönderildi</p>}
            </button>
        </div>
    )
}
