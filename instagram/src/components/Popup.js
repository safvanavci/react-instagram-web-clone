import { useState } from 'react'
import HeaderPost from './posts/HeaderPost'
import CommentPost from './posts/CommentPost'
import PopupBottom from './popup/PopupBottom'
import PopupComments from './popup/PopupComments'
import CrossIcon from './icons/CrossIcon'
import ImgPopup from './popup/ImgPopup'


export default function Popup({ popup, setPopup, liked, setLiked, username, avatar, image, like, explanation }) {

    const [list, setList] = useState([])

    return (
        <>
            {popup &&
                <div className='fixed w-full h-screen z-40 top-0 left-0 bg-light-black flex justify-center items-center'>
                    <div className='right-4 top-4 absolute cursor-pointer' onClick={() => setPopup(false)} >
                        <CrossIcon />
                    </div>
                    <div className='h-[95%] w-3/4 flex bg-black'>

                        <ImgPopup image={image} />

                        <div className=' flex-1 bg-white flex flex-col'>
                            <HeaderPost username={username} avatar={avatar} />
                            <div className='flex-1 p-4 overflow-scroll'>
                                {
                                    list.map(comments => (
                                        <PopupComments comments={comments} />
                                    ))
                                }
                            </div>
                            <div className='border-t border-border'>

                                <PopupBottom liked={liked} setLiked={setLiked} like={like} username={username} explanation={explanation} />

                                <CommentPost setList={setList} list={list} />
                            </div>
                        </div>
                    </div>
                </div>


            }

        </>
    )
}
