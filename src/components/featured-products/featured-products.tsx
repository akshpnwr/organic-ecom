import ProductCard from "./product-card";
import appleImg from "../../assets/products/apple.png";
import startYellowImg from "../../assets/star-yellow.svg";
import banner from "../../assets/featured-products-banner.png";
import { Product } from "../../types";

const products: Product[] = [
  {
    id: "1",
    name: "Green",
    price: "$14.99",
    imageUrl: appleImg,
    ratingImageUrl: startYellowImg,
  },
  {
    id: "2",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: startYellowImg,
  },
  {
    id: "3",
    name: "Green",
    price: "$14.99",
    imageUrl: appleImg,
    ratingImageUrl: startYellowImg,
  },
  {
    id: "4",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: startYellowImg,
  },
  {
    id: "5",
    name: "Red Apple",
    price: "$13.99",
    imageUrl: appleImg,
    ratingImageUrl: startYellowImg,
  },
];

const FeaturedProductsSubSection: React.FC<{
  title: string;
  products: Product[];
}> = ({ title }) => {
  return (
    <div>
      <h1 className="mb-4 font-semibold text-left md:text-base text-zinc-900">
        {title}
      </h1>
      <div className="flex flex-col gap-3">
        {[products[0], products[1], products[2]].map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            direction="vertical"
          />
        ))}
      </div>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  return (
    <div className="md:w-3/4 mt-12 md:mt-0 mx-auto">
      <h1 className="font-bold text-center md:text-4xl text-zinc-900">
        Featured Products
      </h1>
      <section className="mt-10 grid grid-cols-2 gap-2 mx-4 justify-items-center sm:grid-cols-2 md:grid-cols-5 md:gap-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            direction="horizontal"
          />
        ))}
      </section>

      <section className="mt-10 mx-4 grid grid-cols-1 items-center gap-4 md:gap-0 md:grid-cols-4">
        <FeaturedProductsSubSection title="Hot Deals" products={products} />
        <FeaturedProductsSubSection title="Best Seller" products={products} />
        <FeaturedProductsSubSection title="Top Rated" products={products} />
        <div className="my-0 mx-auto">
          <img src={banner} alt="" />
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
