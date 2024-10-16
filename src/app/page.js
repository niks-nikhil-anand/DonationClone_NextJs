import CategoriesSection from "@/components/frontend/ui/CategorySection";
import HeroSection from "@/components/frontend/ui/HeroSection";
import ManualSlider from "@/components/frontend/ui/ManualSlider";
import Marquee from "@/components/frontend/ui/Marquee";
import ProductCard from "@/components/frontend/ui/ProductForSale";
import BlogSection from "./(Frontend)/blogs/page";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <CategoriesSection/>
    <ProductCard/>
    <Marquee/>
    <ManualSlider/>
    <BlogSection/>
   
    </>
  );
}
