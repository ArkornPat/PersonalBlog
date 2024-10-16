import burgerSVG from "../assets/burger-menu-svgrepo-com.svg";

function Navbar() {
  return (
    <>
    <nav className="flex items-center justify-between bg-brown-100 border-b border-brown-300 py-4 px-8 sticky top-0">
      <a href="/" className="font-bold text-2xl hidden md:flex">
        Arkorn Pat<span className="text-green-600">.</span>
      </a>
      <a href="/" className="font-bold text-2xl md:hidden flex">
        Arkorn<span className="text-green-600">.</span>
      </a>
      <div className="md:flex gap-2 hidden">
        <button>
        <a href="/" className="px-9 py-2 rounded-full border">
          Log in
        </a>
        </button>
        <button>
        <a
          href="/"
          className="px-9 py-2 bg-brown-600 text-white rounded-full hover:bg-brown-500"
        >
          Sign up
        </a>
        </button>
      </div>
      <button className="md:hidden"><img src={burgerSVG} alt="burger menu" /></button>
    </nav>
    </>
  );
}

export default Navbar;
