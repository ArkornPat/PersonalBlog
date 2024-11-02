/* eslint-disable react/prop-types */
import HeroImg from "../assets/heropic.jpg"
import { Link } from 'react-router-dom';

function BlogCard({image, title, category, description, author, date, id}) {
  return (
    <div className="flex flex-col gap-4 font-poppins">
      <Link to={`/post/${id}`} className="h-[210px] md:h-[400px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={image}
          alt={title}
        />
      </Link>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full text-sm font-semibold text-green-600 mb-2 px-3 py-1">
            {category}
          </span>
        </div>
        <Link to={`/post/${id}`}>
          <h2 className="font-bold text-xl mb-2">{title}</h2>
        </Link>
        <p className="text-brown-400 text-sm mb-4 flex-grow">
          {description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={HeroImg}
            alt={author}
          />
          <span>{author}</span>
          <span className="mx-2 text-brown-200">|</span>
          <span>{new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
      </div>
    </div>
  );
}
export default BlogCard;
