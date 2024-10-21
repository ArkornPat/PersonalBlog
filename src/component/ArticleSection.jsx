import { Search } from 'lucide-react';
export default function ArticleSection() {
  const btn = "px-5 py-3 hover:bg-brown-300 active:bg-brown-300 rounded-sm mx-[4px]"
  return (
    <div className="font-poppins flex flex-col py-4 px-8">
      <h3 className="text-2xl font-semibold text-brown-600 mb-4">
        Latest articles
      </h3>
      <div className="flex items-center justify-between bg-brown-200 rounded-md px-3 py-2">
        <div className='flex w-1/5 justify-around'> 
          <button className={btn}>Highlight</button>
          <button className={btn}>Cat</button>
          <button className={btn}>Inspiration</button>
          <button className={btn}>Ganeral</button>
        </div>
        <div className="bg-white px-3 py-2 rounded-sm items-center justify-center flex">
        <input
          type="text"
          placeholder="Search"
          className="border-0 outline-none bg-transparent"
        />
        <button><Search/></button>
        </div>
      </div>
    </div>
  );
}
