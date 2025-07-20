import NoteTile from "./components/NoteTile";

export default function Home() {
  return (
    <div className="app-wrapper flex flex-col size-full px-32 pt-15">
      <div className="header flex wrap items-baseline justify-between mb-12">
        <h1 className="text-7xl font-semibold">Take a Note</h1>
        <span className="login flex items-baseline gap-2">
          <div className="bg-white rounded-full size-10" /><p className="text-xl">username</p>
        </span>
      </div>
      <div className="note-wrapper border-b-2 h-[70vh] overflow-y-auto flex flex-wrap  gap-x-20 gap-y-10">
        <NoteTile />
        <NoteTile />
        <NoteTile />
        <NoteTile />
        <NoteTile />
        <NoteTile />
        <NoteTile />
        <NoteTile />
        <NoteTile />
        <NoteTile />
      </div>
      <button type="button" className="text-5xl text-black bg-white size-16 inline-flex self-end mr-8 mt-3 cursor-pointer justify-center items-center border rounded-full">+</button>
    </div>
  );
}
