import HeroSection from "@/components/HeroSection";
import ArticleSection from "@/components/ArticleSection";
import { Navbar, Footer } from "@/components/Header&Footer";

export default function HomePage() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <ArticleSection />
    <Footer/>
    </>
  );
}
