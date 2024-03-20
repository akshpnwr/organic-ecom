import FeaturedProducts from "./components/featured-products/featured-products";
import Hero from "./components/hero/hero";
import Navigation from "./components/navigation/navigation";
import Testimonial from "./components/testimonial";
import banner from "./assets/images/featured-products-banner.png";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturedProducts />

      <div className="px-4 md:px-0 py-10 flex flex-col md:flex-row justify-center gap-x-20">
        <img src={banner} alt="" />
        <img src={banner} alt="" />
        <img src={banner} alt="" />
      </div>
      <Testimonial />
    </div>
  );
}

export default App;
