"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { saveNote } from './saveAction'
import { updateNote } from './updateAction'
import { getSingleNote } from '../lib/getSingleNote'
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"
import { useSearchParams } from 'next/navigation'
import { getUserEmail } from '../lib/getUserEmail'


const Editor = () => {

    const [currentHtml, setcurrentHtml] = useState("");
    const [title, setTitle] = useState('');
    const searchParams = useSearchParams();
    let uid = searchParams.get("uid");


    const handlePrint = () => {
        console.log(currentHtml);
    }

    const checkTitle = async ()=>{
        if(uid){
            console.log("Checking Title");
            const fetchedNote = await getSingleNote(uid);
            setTitle(fetchedNote.title);
        }
    }

    useEffect(() => {
        console.log("Page Loaded");
        checkTitle();
    }, [])
    

    useEffect(() => {
        console.log(title);

    }, [title])

    function formatDateToInput(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const saveNoteToDB = async () => {
        const currentDate = new Date();
        console.log(title);
        console.log(currentHtml);
        console.log(currentDate);
        const email = await getUserEmail;
        console.log(email);
        
        
        if (!uid) {
            try {
                const createdID = await saveNote(title, currentHtml, currentDate);
                uid = createdID;
                alert('✅ Note saved!');
            } catch (e) {
                alert('❌ Error saving note');
                console.log(e);
            }
        } else {
            try {
                await updateNote(title, currentHtml, currentDate);
                alert('✅ Note updated!');
            } catch (e) {
                alert('❌ Error updating note');
                console.log(e);
            }
        }
    }



    return (
        <div className="editor-containor h-screen w-screen flex items-center justify-center">
            <div className="editor-wrapper flex flex-col gap-3 px-25 pt-10 h-[90vh] w-[90vw] rounded-2xl bg-[#5856D6]">
                <span className="editor-header flex items-center justify-between">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="note-title" id="note-title" placeholder='Title' className='text-7xl font-semibold focus:outline-none' />
                    <span className="button-wrapper flex gap-5">
                        <button type="button" onClick={handlePrint} className='bg-white flex gap-1 items-center justify-center text-black font-semibold px-2 py-1 rounded-md cursor-pointer'>Summarize<span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.1071 5.448C9.7051 3.698 12.1231 3.645 12.8321 5.289L12.8921 5.449L13.6991 7.809C13.884 8.35023 14.1829 8.84551 14.5755 9.26142C14.9682 9.67734 15.4454 10.0042 15.9751 10.22L16.1921 10.301L18.5521 11.107C20.3021 11.705 20.3551 14.123 18.7121 14.832L18.5521 14.892L16.1921 15.699C15.6507 15.8838 15.1552 16.1826 14.7391 16.5753C14.323 16.9679 13.996 17.4452 13.7801 17.975L13.6991 18.191L12.8931 20.552C12.2951 22.302 9.8771 22.355 9.1691 20.712L9.1071 20.552L8.3011 18.192C8.11628 17.6506 7.81748 17.1551 7.42485 16.739C7.03222 16.3229 6.5549 15.9959 6.0251 15.78L5.8091 15.699L3.4491 14.893C1.6981 14.295 1.6451 11.877 3.2891 11.169L3.4491 11.107L5.8091 10.301C6.35034 10.1161 6.84562 9.81719 7.26153 9.42457C7.67744 9.03195 8.00432 8.55469 8.2201 8.025L8.3011 7.809L9.1071 5.448ZM11.0001 6.094L10.1941 8.454C9.9125 9.2793 9.45437 10.0333 8.85164 10.6635C8.24891 11.2937 7.51605 11.7849 6.7041 12.103L6.4541 12.194L4.0941 13L6.4541 13.806C7.27941 14.0876 8.03341 14.5457 8.6636 15.1485C9.29379 15.7512 9.78503 16.4841 10.1031 17.296L10.1941 17.546L11.0001 19.906L11.8061 17.546C12.0877 16.7207 12.5458 15.9667 13.1486 15.3365C13.7513 14.7063 14.4842 14.2151 15.2961 13.897L15.5461 13.807L17.9061 13L15.5461 12.194C14.7208 11.9124 13.9668 11.4543 13.3366 10.8515C12.7064 10.2488 12.2152 9.51595 11.8971 8.704L11.8071 8.454L11.0001 6.094ZM19.0001 2C19.1872 2 19.3705 2.05248 19.5293 2.15147C19.688 2.25046 19.8158 2.392 19.8981 2.56L19.9461 2.677L20.2961 3.703L21.3231 4.053C21.5106 4.1167 21.6749 4.23462 21.7953 4.39182C21.9157 4.54902 21.9867 4.73842 21.9994 4.93602C22.012 5.13362 21.9657 5.33053 21.8663 5.50179C21.7669 5.67304 21.6189 5.81094 21.4411 5.898L21.3231 5.946L20.2971 6.296L19.9471 7.323C19.8833 7.51043 19.7653 7.6747 19.608 7.79499C19.4508 7.91529 19.2613 7.98619 19.0637 7.99872C18.8661 8.01125 18.6693 7.96484 18.4981 7.86538C18.3269 7.76591 18.1891 7.61787 18.1021 7.44L18.0541 7.323L17.7041 6.297L16.6771 5.947C16.4896 5.8833 16.3253 5.76538 16.2049 5.60819C16.0845 5.45099 16.0135 5.26158 16.0008 5.06398C15.9882 4.86638 16.0345 4.66947 16.1339 4.49821C16.2333 4.32696 16.3813 4.18906 16.5591 4.102L16.6771 4.054L17.7031 3.704L18.0531 2.677C18.1205 2.47943 18.2481 2.30791 18.4179 2.1865C18.5878 2.06509 18.7913 1.99987 19.0001 2Z" fill="black" />
                            </svg>
                        </span>
                        </button>
                        <button type="button" onClick={saveNoteToDB} className='bg-white flex gap-2 items-center justify-center text-black font-semibold px-2 py-1 rounded-md cursor-pointer'>Save<span>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.00004 20.4199L2.79004 14.2099L5.62004 11.3799L9.00004 14.7699L18.88 4.87988L21.71 7.70988L9.00004 20.4199Z" fill="black" />
                            </svg>
                        </span>
                        </button>
                    </span>
                </span>
                <hr />
                <div className="editor-wrapper-me overflow-auto">
                    <SimpleEditor uid={uid} setcurrentHtml={setcurrentHtml} />
                </div>
            </div>
        </div>
    )
}

export default Editor