import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-col items-center text-gray'>
            <div className='text-xs  py-5 flex flex-wrap gap-x-1 gap-y-1'>
                <a href="hakkinda" className='hover:underline'>Meta</a>
                <a href="yardim" className='hover:underline'>Hakkınde</a>
                <a href="basin" className='hover:underline'>Blog</a>
                <a href="api" className='hover:underline'>İş Fırsatları</a>
                <a href="isfirsatlar" className='hover:underline'>Yardım</a>
                <a href="gizlilik" className='hover:underline'>API</a>
                <a href="kosullar" className='hover:underline'>Gizlilik</a>
                <a href="konumlar" className='hover:underline'>Koşullar</a>
                <a href="dil" className='hover:underline'>Başlıca Hesaplar</a>
                <a href="dil" className='hover:underline'>Konu Etiketleri</a>
                <a href="dil" className='hover:underline'>Konumlar</a>
                <a href="dil" className='hover:underline'>Instagram Lite</a>
                <a href="dil" className='hover:underline'>Kişi Yükleme ve Hesabı Olmayan Kişiler</a>
            </div>
            <div className='text-xs py-2' >
                <p>© 2022 INSTAGRAM FROM META</p>
            </div>
        </div>
    )
}
