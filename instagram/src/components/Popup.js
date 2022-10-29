import { useState } from 'react'
import post from '../assets/post.jpg'
import HeaderPost from './posts/HeaderPost'
import CommentPost from './posts/CommentPost'
import PopupBottom from './popup/PopupBottom'
import PopupComments from './popup/PopupComments'
import CrossIcon from './icons/CrossIcon'


export default function Popup({ popup, setPopup, liked, setLiked }) {

    const [list, setList] = useState([])

    return (
        <>
            {popup &&
                <div className='bg-light-black absolute w-screen h-screen top-0 left-0 z-20 flex justify-center items-center'>
                    <div className='right-4 top-4 absolute cursor-pointer' onClick={() => setPopup(false)} >
                        <CrossIcon />
                    </div>
                    <div className='h-[95%] w-3/4 flex bg-black'>
                        <div className='w-[873px] h-[873px] my-auto'>
                            <img src={post} />
                        </div>
                        <div className=' flex-1 bg-white flex flex-col'>
                            <HeaderPost />
                            <div className='flex-1 p-4 overflow-scroll'>
                                {
                                    list.map(comments => (
                                        <PopupComments comments={comments} />
                                    ))
                                }
                            </div>
                            <div className='border-t border-border'>

                                <PopupBottom liked={liked} setLiked={setLiked} />

                                <CommentPost setList={setList} list={list} />
                            </div>
                        </div>
                    </div>
                </div>


            }

        </>
    )
}
