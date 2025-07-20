import React from 'react'

const NoteTile = () => {
    return (
        <div className='note-tile grow-1 bg-[#007AFF] rounded-2xl py-8 px-5  max-w-[280px]'>
            <div className="text-wrapper flex flex-col gap-7">
                <h3 className='font-semibold text-3xl'>Note Title</h3>
                <p className='text-'>Chemistry is the scientific study of matter, its properties, composition, and the changes it undergoes. It explores the structure of atoms and molecules...</p>
                <p>19 April, 2025</p>
            </div>
        </div>
    )
}

export default NoteTile