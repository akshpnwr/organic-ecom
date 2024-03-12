import ProductCard from "./product-card";
import appleImg from "../../assets/products/apple.png";
import startYellowImg from "../../assets/star-yellow.svg";

const FeaturedProducts: React.FC = () => {
  const products = [
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
  ];

  return (
    <div className="md:w-2/3 mt-12 md:mt-0 mx-auto">
      <h1 className="font-bold text-center md:text-4xl text-zinc-900">
        Featured Products
      </h1>
      <section className="mt-10 grid grid-cols-2 gap-2 mx-4 justify-items-center sm:grid-cols-2 md:grid-cols-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default FeaturedProducts;
