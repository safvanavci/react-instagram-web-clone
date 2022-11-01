import HeaderPost from './posts/HeaderPost'
import CommentPost from './posts/CommentPost'
import PopupBottom from './popup/PopupBottom'
import PopupComments from './popup/PopupComments'
import CrossIcon from './icons/CrossIcon'
import ImgPopup from './popup/ImgPopup'
import { useRef,useEffect } from 'react'
import {MainContext, useContext} from '../context/Context'


export default function Popup({ username, avatar, image, like, explanation }) {
    
    const {popup, setPopup, list} = useContext(MainContext)
    const ref = useRef();

    useOnClickOutside(ref, () => setPopup(false));
    
    function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
              if (!ref.current || ref.current.contains(event.target)) {
                return;
              }handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
          },[ref,handler]
        );
      }
      
    return (
        <>
            {popup &&
                <div className='fixed w-full h-screen z-40 top-0 left-0 bg-light-black flex justify-center items-center'>
                    <div className='right-4 top-4 absolute cursor-pointer' onClick={() => setPopup(false)} >
                        <CrossIcon />
                    </div>
                    <div ref={ref} className='lg:h-[95%] w-3/4 lg:flex bg-black'>

                        <ImgPopup image={image} />

                        <div className=' hidden bg-white lg:flex  flex-col'>
                            <HeaderPost username={username} avatar={avatar} />
                            <div className='flex-1 w-[350px] p-4 overflow-scroll break-all'>
                                {
                                    list.map(comments => (
                                        <PopupComments comments={comments} />
                                    ))
                                }
                            </div>
                            <div className='border-t border-border'>

                                <PopupBottom like={like} username={username} explanation={explanation} />

                                <CommentPost />
                            </div>
                        </div>
                    </div>
                </div>


            }

        </>
    )
}
