import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "@/components/Header&Footer";
export default function NotFoundPage() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex flex-col justify-center items-center p-4 my-6 flex-grow gap-5">
        <Info className="size-32" />
        <h1 className="font-poppins text-4xl font-bold">Page Not Found</h1>
        <button
          className="px-9 py-2 bg-brown-600 text-white rounded-full hover:bg-brown-500 font-medium"
          onClick={backToHome}
        >
          Go to HomePage
        </button>
      </main>
      <Footer/>
    </div>
  );
}
