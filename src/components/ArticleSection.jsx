import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import BlogCard from './BlogCard';
import { blogPosts } from "../data/data";

export default function ArticleSection() {
  const btn = "px-5 py-3 hover:bg-brown-300 active:bg-brown-300 rounded-sm mx-[4px]"
  return (
    <div className="font-poppins flex flex-col py-4 px-8">
      <h3 className="text-2xl font-semibold text-brown-600 mb-4">
        Latest articles
      </h3>
      <div className="flex items-center justify-between bg-brown-200 rounded-md px-3 py-2 flex-col lg:flex-row gap-3">
        <div className='lg:flex w-1/5 justify-around hidden'> 
          <button className={btn}>Highlight</button>
          <button className={btn}>Cat</button>
          <button className={btn}>Inspiration</button>
          <button className={btn}>Ganeral</button>
        </div>
        <div className="bg-white px-3 py-2 rounded-sm items-center justify-between flex w-full lg:w-[360px]">
        <input
          type="text"
          placeholder="Search"
          className="border-0 outline-none bg-transparent"
        />
        <button><Search/></button>
        </div>
        <Select>
      <SelectTrigger className="flex lg:hidden">
        <SelectValue placeholder="Select a Toppic" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Highlight">Highlight</SelectItem>
          <SelectItem value="Cat">Cat</SelectItem>
          <SelectItem value="Inspiration">Inspiration</SelectItem>
          <SelectItem value="Ganeral">Ganeral</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
      {blogPosts.map((post, index) => (
      <BlogCard
        key={index}
        image={post.image}
        category={post.category}
        title={post.title}
        description={post.description}
        author={post.author}
        date={post.date}
      />
    ))}
  </article>
    </div>
  );
}