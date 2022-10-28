import avatar from '../../assets/avatar.jpg'
import SettingIcon from '../icons/SettingIcon'

export default function HeaderProfile() {
    return (
        <div className='py-8 flex mt-5'>
            <div className='w-[291px] flex justify-center mr-7'>
                <img src={avatar} className='w-[150px] h-[150px] rounded-full' />
            </div>
            <div>
                <div className='flex items-center gap-4'>
                    <h1 className='text-[28px] font-light'>
                        username
                    </h1>
                    <button className='px-2 py-1 border border-border rounded text-sm font-semibold h-[30px]'>
                        Profili düzenle
                    </button>
                    <SettingIcon />
                </div>
                <div className='flex gap-5 font-normal py-5'>
                    <div>
                        <span className='font-semibold'>
                            0
                        </span>
                        <span> gönderi</span>
                    </div>
                    <div>
                        <span className='font-semibold'>
                            67
                        </span>
                        <span> takipçi</span>
                    </div>
                    <div>
                        <span className='font-semibold'>
                            189
                        </span>
                        <span> takip</span>
                    </div>
                </div>
                <div className='text-base font-semibold'>
                    <p>User Name</p>
                </div>
            </div>
        </div>
    )
}
