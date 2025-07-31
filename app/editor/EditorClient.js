"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { saveNote } from './saveAction'
import { updateNote } from './updateAction'
import { getSingleNote } from '../lib/getSingleNote'
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"
import { useSearchParams } from 'next/navigation'
import { getUserEmail } from '../lib/getUserEmail'
import { CustomDialog } from '../components/customDialog'


const EditorClient = () => {

    const [currentHtml, setcurrentHtml] = useState("");
    const [title, setTitle] = useState('');
    const searchParams = useSearchParams();
    let uid = searchParams.get("uid");

    useEffect(() => {
      console.log("Parent Received Html");
      console.log(currentHtml);
    }, [currentHtml])
    

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
        const email = await getUserEmail();
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
        <div className="editor-container h-screen w-screen flex items-center justify-center">
            <div className="editor-wrapper flex flex-col gap-3 px-25 pt-10 h-[90vh] w-[90vw] rounded-2xl bg-[#5856D6]">
                <span className="editor-header flex items-center justify-between">
                    <input  value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="note-title" id="note-title" placeholder='Title' className='text-7xl text-white font-semibold focus:outline-none' />
                    <span className="button-wrapper flex gap-5">
                        <CustomDialog noteContent={currentHtml}/>
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

export default EditorClient