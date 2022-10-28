import PlusIcon from '../icons/PlusIcon'

export default function StoryProfile() {
    return (
        <div className='pb-8 px-8 '>
            <div className='flex flex-col items-center w-28 p-2.5'>

                <div className='w-[87px] h-[87px] rounded-full border border-border flex justify-center items-center'>
                    <PlusIcon />
                </div>
                <p className='text-sm font-semibold py-3'>
                    Yeni
                </p>
            </div>
        </div>
    )
}
