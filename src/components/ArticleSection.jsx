import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from "./BlogCard";
import { blogPosts } from "../data/data";
import { useState } from "react";

export default function ArticleSection() {
  const [cate, setCate] = useState("Highlight");

  const categories = ["Highlight", "Cat", "Inspiration", "General"];

  const filteredPosts = cate === "Highlight" ? blogPosts : blogPosts.filter((post) => post.category?.toLowerCase() === cate?.toLowerCase());

  return (
    <div className="font-poppins flex flex-col py-4 px-8">
      <h3 className="text-2xl font-semibold text-brown-600 mb-4">
        Latest articles
      </h3>
      <div className="flex items-center justify-between bg-brown-200 rounded-md px-3 py-2 flex-col lg:flex-row gap-3">
        <div className="lg:flex w-1/5 justify-around hidden">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCate(category)}
              className={`px-5 py-3 rounded-sm mx-[4px]  ${category === cate ? "bg-brown-300" : "hover:bg-brown-300"}`}
              disabled={category === cate}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="bg-white px-3 py-2 rounded-sm items-center justify-between flex w-full lg:w-[360px]">
          <input
            type="text"
            placeholder="Search"
            className="border-0 outline-none bg-transparent"
          />
          <button>
            <Search />
          </button>
        </div>

        <Select value={cate} onValueChange={(value) => setCate(value)}>
          <SelectTrigger className="flex lg:hidden">
            <SelectValue placeholder="Select a Topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
        {filteredPosts.map((post, index) => (
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
