import { useState } from "react";
import EmoteIcon from '../icons/EmoteIcon'

export default function CommentPost({ setList, list }) {

    const [comment, setComment] = useState('')

    return (
        <div className='px-3 py-1 border-t border-border flex items-center'>
            <div className='py-2 pr-3' >
                <EmoteIcon />
            </div>

            <textarea className='resize-none !h-[18px] w-full outline-none overflow-hidden text-sm' placeholder="Yorum Ekle..." value={comment} onChange={e => setComment(e.target.value)}  ></textarea>

            <button className='text-sm font-semibold text-blue disabled:opacity-50' disabled={!comment}
                onClick={
                    () =>{
                        setList([
                            ...list, { comm: comment }
                        ])
                        setComment('')}
                }
            >
                Paylaş
            </button>
        </div>
    )
}
