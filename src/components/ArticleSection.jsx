import { Search } from "lucide-react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from "./BlogCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [cate, setCate] = useState("Highlight");
  const [dataPosts, setDataPosts] = useState([]);
  const [limit, setLimit] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [dataKeyword, setDataKeyWord] = useState([]); 

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://blog-post-project-api.vercel.app/posts?limit=${limit}&${
            cate !== "Highlight" ? `&category=${cate}` : ""
          }`
        );
        setDataPosts(response.data.posts);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [cate, limit]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchDataKeyWord() {
      try {
        const response = await axios.get(
          `https://blog-post-project-api.vercel.app/posts?keyword=${keyword}`
        );
        setDataKeyWord(response.data.posts);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchDataKeyWord();
  }, [keyword]);

  function viewMore() {
    if (limit < 30) {
      let newlimit = limit + 6;
      setLimit(newlimit);
    }
  }

  return (
    <div className="font-poppins flex flex-col py-4 px-8 lg:px-20">
      <h3 className="text-2xl font-semibold text-brown-600 mb-4">
        Latest articles
      </h3>
      <div className="flex items-center justify-between bg-brown-200 rounded-md px-3 py-2 flex-col lg:flex-row gap-3">
        <div className="lg:flex w-1/5 justify-around hidden">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCate(category)}
              className={`px-5 py-3 rounded-sm mx-[4px] ${
                category === cate ? "bg-brown-300" : "hover:bg-brown-300"
              }`}
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
            onChange={(e) => setKeyword(e.target.value)}
          />
          <span>
            <Search />
          </span>
          {keyword && dataKeyword.length > 0 && (
            <div className="absolute z-10 w-[360px] mt-96 bg-background rounded-sm shadow-lg p-1">
              {dataKeyword.map((keyword, index) => (
                <button
                  key={index}
                  className="text-start px-4 py-2 block w-[360px] text-sm text-foreground hover:bg-brown-300  hover:rounded-sm cursor-pointer"
                  onClick={() => navigate(`/post/${keyword.id}`)}
                >
                  {keyword.title}
                </button>
              ))}
            </div>
          )}
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
        {dataPosts.map((post, index) => (
          <BlogCard
            key={index}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            author={post?.author}
            date={post.date}
            id={post.id}
          />
        ))}
      </article>
      <button
        onClick={viewMore}
        className="font-poppins text-2xl hover:text-muted-foreground font-medium underline items-center"
      >
        {isLoading ? <Spin /> : "View more"}
      </button>
    </div>
  );
}

export function Spin() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12" />
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
