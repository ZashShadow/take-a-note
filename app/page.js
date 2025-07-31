"use client"
import NoteTile from "./components/NoteTile";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllNotes } from "./lib/getAllNotes";
import { deleteNote } from "./lib/deleteNote";
import AuthButtons from "./components/AuthButtons";
import { useSession } from "next-auth/react";

export default function Home() {

  const [fetchedNotes, setfetchedNotes] = useState([]);
  const { data: session } = useSession(); 


  //*************Formatting Functions******************/
  const stripHtml = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.textContent || "";
  };
  function formatDate(isoDateString) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const date = new Date(isoDateString);
    return date.toLocaleDateString('en-GB', options).replace(/ (\w+) (\d{4})$/, ' $1, $2');
  }

  const handleDelete = async (uid) => {
    await deleteNote(uid);
    fetchNotes();
  }

  const fetchNotes = async () => {
    console.log("Begining Fetch 🤑");
    const notes = await getAllNotes();
    const updatedNotes = notes.map(note => ({
      ...note,
      body: stripHtml(note.body),
      createdAt: formatDate(note.createdAt)
    }));
    setfetchedNotes(updatedNotes);
    console.log("Fetch Complete ✅");
  }

  useEffect(() => {
    fetchNotes();
  }, [])


  useEffect(() => {
    console.log(fetchedNotes);
  }, [fetchedNotes])



  return (
    <div className="app-wrapper flex flex-col h-screen w-screen px-32 max-lg:px-10 max-md:px-5 pt-15">
      <div className="header flex max-md:flex-col wrap items-baseline justify-between max-md:items-center max-md:gap-5 mb-12">
        <h1 className="text-7xl max-md:text-8xl font-semibold">Take a Note</h1>
        <span className="login flex items-center gap-4 max-md:gap-4 max-md:fixed bottom-5">
          <div className={`bg-white rounded-full size-10 bg-cover `} style={{
            backgroundImage: `url(${session?.user?.image})`,
          }} />
          
          <p className="text-xl">{session?.user?.name
            ? `${session.user.name}`
            : "Not signed in"}
          </p>

          <AuthButtons />
        </span>
      </div>
      <div className={`note-wrapper border-b-2 h-[70vh] overflow-y-auto flex flex-wrap  gap-x-20 gap-y-10 ${fetchedNotes.length === 0 ? "items-center justify-center" : ""}`}>
        {fetchedNotes.length === 0 ? <p>No Notes yet, start by making one</p> : fetchedNotes.map((note) => {
          return <NoteTile key={note._id} handleDelete={handleDelete} uid={note._id} title={note.title} body={note.body} createdAt={note.createdAt} />
        })}
      </div>
      <Link className="self-end" href={"/editor"}><button type="button" className="text-5xl text-black bg-white size-16 inline-flex  mr-8 mt-3 cursor-pointer justify-center items-center border rounded-full">+</button></Link>
    </div>
  );
}
