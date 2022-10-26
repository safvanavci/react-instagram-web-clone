import React from 'react'

export default function NotFound() {
    return (
        <div className='bg-brand w-screen flex items-center flex-col'>

            <h1 className='text-2xl font-semibold py-10'>
                Üzgünüz, bu sayfaya ulaşılamıyor.
            </h1>
            <p>
                Tıkladığın bağlantı bozuk olabilir veya sayfa kaldırılmış olabilir.
            </p>

        </div>
    )
}
