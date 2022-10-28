import React from 'react'

export default function PopupSidebar({pop}) {
    return (
        <div className={ ` ${pop} hidden w-56 absolute bottom-14  left-1 rounded-md overflow-hidden bg-[#efefef] shadow-lg` }>
            <div className=' py-2 px-4 bg-white hover:bg-brand'>
                Ayarlar
            </div>
            <div className=' py-2 px-4  border-t border-border bg-white hover:bg-brand'>
                Kaydedilenler
            </div>
            <div className=' py-2 px-4  border-t border-border bg-white mb-2 hover:bg-brand'>
                Bir sorun bildir
            </div>
            <div className=' py-2 px-4  border-border bg-white hover:bg-brand'>
                Hesap Değiştir
            </div>
            <div className=' py-2 px-4  border-t border-border bg-white hover:bg-brand'>
                Çıkış yap
            </div>

        </div>
    )
}
