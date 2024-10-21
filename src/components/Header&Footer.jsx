import { AlignJustify,Linkedin,Github,Mail } from 'lucide-react';



export function Navbar() {
  return (
    <>
    <nav className="flex items-center justify-between bg-brown-100 border-b border-brown-300 py-4 px-8 sticky top-0 font-poppins z-50">
      <a href="/" className="font-bold text-2xl hidden md:flex">
        Arkorn Pat<span className="text-green-600">.</span>
      </a>
      <a href="/" className="font-bold text-2xl md:hidden flex">
        Arkorn<span className="text-green-600">.</span>
      </a>
      <div className="md:flex gap-2 hidden">
        <button>
        <a href="/" className="px-9 py-2 rounded-full border border-brown-400">
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
      <button className="md:hidden"><AlignJustify/></button>
    </nav>
    </>
  );
}


export function Footer() {
  const styleIcon = "flex items-center justify-center w-9 h-9 rounded-full border border-brown-500"
  const hoverIcon ="hover:scale-110 transition duration-300"
  return (
    <footer className='flex justify-center bg-brown-200 font-poppins'>
      <div className='flex flex-col lg:flex-row items-center justify-between w-5/6 py-10 gap-3'>
        <div className='flex justify-around w-3/4 lg:w-1/6 items-center'>
          Get in touch
          <div className={styleIcon}>
            <a href='https://www.linkedin.com/in/arkorn-pattanavibul-b34266319/'><Linkedin className={hoverIcon}/></a>
          </div>
          <div className={styleIcon}>
            <a href='https://github.com/ArkornPat'><Github className={hoverIcon}/></a>
          </div>
          <div className={styleIcon}>
            <a><Mail className={hoverIcon}/></a>
          </div>
        </div>
        <div>
          <a href='/' className='underline underline-offset-1'>Home page</a>
        </div>
      </div>
    </footer>
  );
}
