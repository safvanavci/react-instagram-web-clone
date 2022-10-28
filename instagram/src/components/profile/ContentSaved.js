import React from 'react'

export default function ContentSaved() {
  return (
    <div className='pt-6'>
      <div className='text-xs text-gray flex'>
        <p className='flex-1'>
          Kaydettiklerini sadece sen görebilirsin
        </p>
        <a href="" className='font-semibold text-blue text-sm'>
          + Yeni Koleksiyon
        </a>
      </div>
      <div className='flex justify-center mt-2'>

        <div className='w-[293px] h-[293px] bg-gradient-to-t from-gray border border-border rounded-sm text-lg text-white font-semibold flex items-end'>
          <p className='py-3 px-4'>
            Tüm Gönderiler
          </p>
        </div>
      </div>
    </div>
  )
}
