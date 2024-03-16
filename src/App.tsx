import FeaturedProducts from "./components/featured-products/featured-products";
import Hero from "./components/hero/hero";
import Navigation from "./components/navigation/navigation";
import Testimonial from "./components/testimonial";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Testimonial />
    </div>
  );
}

export default App;
