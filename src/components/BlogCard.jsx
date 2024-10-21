function BlogCard(props) {
  return (
    <div className="flex flex-col gap-4 font-poppins">
      <a href="#" className="relative h-[210px] md:h-[400px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={props.image}
          alt={props.title}
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full text-sm font-semibold text-green-600 mb-2 px-3 py-1">
            {props.category}
          </span>
        </div>
        <a href="#">
          <h2 className="font-bold text-xl mb-2">{props.title}</h2>
        </a>
        <p className="text-brown-400 text-sm mb-4 flex-grow">
          {props.description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={props.image}
            alt={props.author}
          />
          <span>{props.author}</span>
          <span className="mx-2 text-brown-200">|</span>
          <span>{props.date}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
