import heroPic from "../assets/heropic.jpg";
const HeroSection = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-center items-center py-4 px-8">
      <div className="flex flex-col items-center lg:items-end lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 font-poppins">
        <h1 className="text-4xl lg:text-6xl font-semibold mb-4 text-brown-600 lg:text-end text-center">
          Stay <br className="hidden lg:block"></br>
          Informed,<br></br>
          Stay Inspired 
        </h1>
        <p className="text-lg text-brown-400 lg:text-end text-center">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </div>
      <img
        src={heroPic}
        alt="Person & Cat"
        className="h-[530px] object-cover rounded-2xl lg:w-1/3 mx-4 mb-8"
      />
      <div className="flex flex-col lg:w-1/3 mb-8 lg:pr-8 font-poppins">
        <h2 className="font-semibold mb-1 text-brown-400">-Author</h2>
        <h3 className="text-2xl font-bold mb-3 text-brown-500">Arkorn Pat.</h3>
        <p className="text-brown-400 mb-4">
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <p className="text-brown-400">
          When I&apos;m not writing, I spend time volunteering at my local
          animal shelter, helping cats find loving homes.
        </p>
      </div>
    </main>
  );
};

export default HeroSection;
