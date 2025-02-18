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
import {
  fetchAbout,
  fetchBanners,
  fetchHomeMedia,
  fetchNews,
  fetchProducts,
} from "@/lib/api";
import { cookies } from "next/headers";

export async function generateMetadata() {
  const lang = cookies().get("lang")?.value || "en";

  return {
    title: lang === "en" ? "DELPACK || Home" : "ديلباك || الرئيسية",
    description:
      lang === "en"
        ? "Delta Misr Plastic Factories Delpack manufactures plastic containers (coloured, transparent and opaque) for many consumer goods and industrial products"
        : "تقوم مصانع دلتا مصر للبلاستيك (Delpack) بتصنيع الحاويات البلاستيكية (الملونة، الشفافة والمعتمة) للعديد من السلع الاستهلاكية والمنتجات الصناعية",
    keywords:
      lang === "en"
        ? "plastic containers, transparent containers, plastic bottles, juice bottles, oil bottles, jars, plastics, cosmetics, bottle, olive oil, oil, creams, cylinders, easy open, cans, shampoo containers, juice containers, cream containers, packaging, packaging and wrapping"
        : "عبوات بلاستيك, عبوات شفافه, زجاجات بلاستيك, زجاجات عصير, زجاجات زيت, برطمانات, بلاستيك, كوزمتكس, عبوه, زيت زيتون, زيت, كريمات, سلندرات, ايزي اوبن, كانز, عبوات شامبو, عبوات عصير, عبوات كريم, عبوات تعبئه, تعبئه وتغليف",
  };
}
export default async function Home() {
  const lang = cookies().get("lang")?.value || "en";
  const { banners } = await fetchBanners();
  const { media } = await fetchHomeMedia();
  const { about } = await fetchAbout(lang);
  const { news } = await fetchNews(lang);
  const { products } = await fetchProducts(1);

  return (
    <div className="">
      <Hero banners={banners} />
      <OurProductHeading />
      <SwiperProducts products={products} />
      <AboutUs description={about?.about?.title} />
      <OurFields
        description={about?.about?.our_field}
        fields={about?.about?.fields}
        slides={about?.sliders_abouts}
      />
      <Faqs />
      <VideoHome media={media} />
      {/* Sections after the video */}
      <div className="relative z-50 bg-white">
        <WeHere />
        <MapSection />
        <Catalogue />
        <Blogs news={news} />
        <Clients />
        <AnyQuestion />
      </div>
    </div>
  );
}
