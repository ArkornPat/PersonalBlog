/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroImg from "../assets/heropic.jpg";
import ReactMarkdown from "react-markdown";
import { Heart, Copy, Facebook, Linkedin, Twitter } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";

export default function ViewPost() {
  const [dataPost, setDataPost] = useState([]);
  const { postId } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://blog-post-project-api.vercel.app/posts/${postId}`
        );
        setDataPost(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [postId]);

  return (
    <main className="flex flex-col justify-center items-center pt-4 gap-5">
      <div className="xl:w-3/4 w-full px-8 space-y-4">
        <img
          src={dataPost.image}
          className="w-full h-[260px] lg:h-[580px] object-cover rounded-2xl"
          alt={dataPost.title}
        />
      </div>

      <div className="xl:w-3/4  px-8 flex flex-col md:flex-row gap-14 font-poppins">
        {/* contentleft */}
        <div className="xl:w-3/4  space-y-8">
          {/* content */}
          <article>
            <div className="flex">
              <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
                {dataPost.category}
              </span>
              <span className="px-3 py-1 text-sm font-normal text-muted-foreground">
                {new Date(dataPost.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl font-bold">{dataPost.title}</h1>
            <p className="mt-4 mb-10">{dataPost.description}</p>
            <div className="markdown">
              <ReactMarkdown>{dataPost.content}</ReactMarkdown>
            </div>
          </article>
          {/* Bio */}
          <div className="block xl:hidden">
            <Bio dataPost={dataPost} />
          </div>
          {/* like&share */}
          <div className="bg-brown-200 py-4 px-4 rounded-xl flex flex-col space-y-4 md:gap-16 md:flex-row md:items-center md:space-y-0 md:justify-between mb-10">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="px-9 py-3 rounded-full border border-brown-400 font-medium bg-white flex gap-2">
                  <Heart /> {dataPost.likes}
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader className="flex flex-col justify-center items-center">
                  <AlertDialogTitle className="text-3xl font-semibold pb-2 text-center">
                    Create an account to continue
                  </AlertDialogTitle>
                  <Link to="/register" className="rounded-full text-white bg-foreground hover:bg-muted-foreground transition-colors py-4 text-lg w-52 text-center">
                    Create account
                  </Link>
                  <AlertDialogDescription className="flex flex-row gap-1 justify-center font-medium text-center pt-2">
                    Already have an account?
                    <Link to="/login" className="text-foreground hover:text-muted-foreground transition-colors underline font-semibold">
                      Log in
                    </Link>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="absolute right-4 top-2 sm:top-4 p-1 border-none">
                    X
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <div className="flex justify-center items-center gap-3">
              <button className="px-9 py-3 rounded-full border border-brown-400 font-medium bg-white flex gap-2">
                <Copy /> Copy
              </button>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-brown-500 bg-white">
                <a>
                  <Facebook />
                </a>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-brown-500 bg-white">
                <a>
                  <Linkedin />
                </a>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-brown-500 bg-white">
                <a>
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
          {/* comment */}
          <h2 className="text-brown-400 font-medium text-xl">Comment</h2>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="flex flex-col gap-5">
                <textarea
                  placeholder="What are your thoughts?"
                  className="w-full p-4 h-24 resize-none py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground border border-brown-500"
                />
                <div className="flex justify-end">
                  <button className="px-8 py-2 bg-foreground text-white rounded-full hover:bg-muted-foreground transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader className="flex flex-col justify-center items-center">
                <AlertDialogTitle className="text-3xl font-semibold pb-2 text-center">
                  Create an account to continue
                </AlertDialogTitle>
                <Link to="/register" className="rounded-full text-white bg-foreground hover:bg-muted-foreground transition-colors py-4 text-lg w-52 text-center">
                  Create account
                </Link>
                <AlertDialogDescription className="flex flex-row gap-1 justify-center font-medium text-center pt-2">
                  Already have an account?
                  <Link to="/login" className="text-foreground hover:text-muted-foreground transition-colors underline font-semibold">
                    Log in
                  </Link>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="absolute right-4 top-2 sm:top-4 p-1 border-none">
                  X
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* contentright stick */}
        <div className="hidden xl:block w-1/4">
          <div className="sticky top-16">
            <Bio dataPost={dataPost} />
          </div>
        </div>
      </div>
    </main>
  );
}

function Bio({ dataPost }) {
  return (
    <div className="bg-brown-200 rounded-2xl p-6">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img
            src={HeroImg}
            alt="Thompson P."
            className="object-cover w-16 h-16"
          />
        </div>
        <div>
          <p className="text-sm">Author</p>
          <h3 className="text-2xl font-bold">{dataPost.author}</h3>
        </div>
      </div>
      <hr className="border-brown-300 mb-4" />
      <div className="text-muted-foreground space-y-4">
        <p>
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <p>
          When I&apos;m not writing, I spend time volunteering at my local
          animal shelter, helping cats find loving homes.
        </p>
      </div>
    </div>
  );
}
