import FeaturedProducts from "./components/featured-products/featured-products";
import Hero from "./components/hero/hero";
import Navigation from "./components/navigation/navigation";
import Testimonial from "./components/testimonial";
import banner1 from "./assets/images/homepage-ad-banner-1.png";
import banner2 from "./assets/images/homepage-ad-banner-2.png";
import banner3 from "./assets/images/homepage-ad-banner-3.png";
import TopCategory from "./components/top-category";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <TopCategory />
      <div className="px-4 my-0 mx-auto py-10 md:px-0 flex flex-col items-center justify-center md:flex-row gap-10 ">
        <img
          className="w-4/5 md:w-[23%] hover:scale-105 transition duration-200 ease-in"
          src={banner1}
          alt=""
        />
        <img
          className="w-4/5 md:w-[23%] hover:scale-105 transition duration-200 ease-in"
          src={banner2}
          alt=""
        />
        <img
          className="w-4/5 md:w-[23%] hover:scale-105 transition duration-200 ease-in"
          src={banner3}
          alt=""
        />
      </div>
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
