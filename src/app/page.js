import AboutUs from "@/components/Home/AboutUs/AboutUs";
import AnyQuestion from "@/components/Home/anyQuestion/AnyQuestion";
import Blogs from "@/components/Home/Blogs/Blogs";
import Catalogue from "@/components/Home/catalogue/Catalogue";
import Clients from "@/components/Home/clients/Clients";
import Faqs from "@/components/Home/faqs/Faqs";
import Hero from "@/components/Home/Hero/Hero";
import MapSection from "@/components/Home/mapSection/MapSection";
import OurFields from "@/components/Home/ourFields/OurFields";
import OurProductHeading from "@/components/Home/ourProducts/OurProductHeading";
import SwiperProducts from "@/components/Home/ourProducts/SwiperProducts";
import VideoHome from "@/components/Home/video/VideoHome";
import WeHere from "@/components/Home/wehere/WeHere";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <OurProductHeading />
      <SwiperProducts />
      <AboutUs />
      <OurFields />
      <Faqs />
      <VideoHome />
      {/* Sections after the video */}
      <div className="relative z-20 bg-white">
        <WeHere />
        <MapSection />
        <Catalogue />
        <Blogs />
        <Clients />
        <AnyQuestion />
      </div>
    </div>
  );
}
