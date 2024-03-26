import FeaturedProducts from "../components/featured-products/featured-products";
import Footer from "../components/footer";
import Hero from "../components/hero/hero";
import Navigation from "../components/navigation/navigation";
import Testimonial from "../components/testimonial";
import TopCategory from "../components/top-category";
import banner1 from "../assets/images/homepage-ad-banner-1.png";
import banner2 from "../assets/images/homepage-ad-banner-2.png";
import banner3 from "../assets/images/homepage-ad-banner-3.png";
import post1 from "../assets/images/instagram-posts/post-1.png";
import post2 from "../assets/images/instagram-posts/post-2.png";
import post3 from "../assets/images/instagram-posts/post-3.png";
import post4 from "../assets/images/instagram-posts/post-4.png";
import post5 from "../assets/images/instagram-posts/post-5.png";
import post6 from "../assets/images/instagram-posts/post-6.png";

import underline from "../assets/images/underline.svg";

const Homepage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <TopCategory />

      {/* Adverstisement section */}
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
      {/* Follow us section */}
      <div className="md:w-3/4 my-14 mx-auto">
        <h1 className="font-bold text-center text-2xl md:text-4xl text-zinc-900">
          Follow us on Instagram
        </h1>
        <img src={underline} className="m-auto mt-4" alt="" />
        <div className="grid mt-8 grid-cols-2 justify-items-center gap-y-10 md:flex md:gap-x-4">
          <img
            src={post1}
            alt="post-1"
            className="max-w-full md:max-w-[calc(100%/6-13px)]"
          />
          <img
            src={post2}
            alt="post-1"
            className="max-w-full md:max-w-[calc(100%/6-13px)]"
          />
          <img
            src={post3}
            alt="post-1"
            className="max-w-full md:max-w-[calc(100%/6-13px)]"
          />
          <img
            src={post4}
            alt="post-1"
            className="max-w-full md:max-w-[calc(100%/6-13px)]"
          />
          <img
            src={post5}
            alt="post-1"
            className="max-w-full md:max-w-[calc(100%/6-13px)]"
          />
          <img
            src={post6}
            alt="post-1"
            className="max-w-full md:max-w-[calc(100%/6-13px)]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
