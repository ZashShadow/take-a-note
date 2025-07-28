// "use client"
import React from 'react'
import { connectDB } from '../lib/connectDb'
import { useEffect } from 'react'
import Link from 'next/link'


const NoteTile = ({ handleDelete, title, body, createdAt, uid }) => {

    useEffect(() => {
        // await connectDB();
        // const note = await Note.findById(uid);
        // const fetchedHtml 
        console.log(uid);
    }, [])

    const deleteBtn = (e) => {
        e.stopPropagation();
        handleDelete(uid);
    }


    return (
        <Link href={{ pathname: '/editor', query: { uid: uid } }}>
            <div className='note-tile bg-[#007AFF] rounded-2xl py-8 px-5 flex flex-col  w-[280px] h-[315px] '>
                <div className="text-wrapper  flex flex-col flex-grow  gap-7">
                    <h3 className='font-semibold line-clamp-2 text-3xl'>{title}</h3>
                    <p className="overflow-hidden text-ellipsis line-clamp-6 min-h-[6.5rem]" >{body}</p>
                    <span className='mt-auto flex justify-between '>
                        <p className=' font-semibold'>{createdAt}</p>
                        <button onClick={(e) => {
                            e.stopPropagation(); // ⛔ prevent bubbling to Link
                            e.preventDefault();  // 🛑 also prevent the Link from navigating
                            deleteBtn(e);         // ✅ your delete logic
                        }} className='bg-black w-fit p-1 rounded-full flex justify-center items-center hover:scale-120 cursor-pointer'>
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.6665 14C4.29984 14 3.98606 13.8696 3.72517 13.6087C3.46428 13.3478 3.33362 13.0338 3.33317 12.6667V4H2.6665V2.66667H5.99984V2H9.99984V2.66667H13.3332V4H12.6665V12.6667C12.6665 13.0333 12.5361 13.3473 12.2752 13.6087C12.0143 13.87 11.7003 14.0004 11.3332 14H4.6665ZM5.99984 11.3333H7.33317V5.33333H5.99984V11.3333ZM8.6665 11.3333H9.99984V5.33333H8.6665V11.3333Z" fill="white" />
                            </svg>
                        </button>
                    </span>

                </div>
            </div>
        </Link>
    )
}
// Chemistry is the scientific study of matter, its properties, composition, and the changes it undergoes. It explores the structure of atoms and molecules and structure of the atoms and idk i dont like chemistry
export default NoteTile