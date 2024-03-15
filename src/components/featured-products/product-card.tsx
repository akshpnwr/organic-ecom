import React from "react";
import shoppingBag from "../../assets/add-to-cart.svg";
import { Product } from "../../types";

interface ProductCardProps {
  direction?: "horizontal" | "vertical";
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, direction }) => {
  return (
    <article
      className={`flex ${
        direction == "vertical" ? "flex-row" : "flex-col"
      } whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 leading-[150%] md:max-w-[248px]`}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className={`${
          direction == "vertical" ? "w-1/3 m-3" : "w-full"
        } aspect-[1.01]`}
      />
      <div className="flex justify-between">
        <div className="flex flex-col justify-center px-4 py-3.5 w-full">
          <p className="text-sm text-neutral-600">{product.name}</p>
          <p className="text-sm font-semibold text-zinc-900">{product.price}</p>
          <div className="flex">
            <img
              src={product.ratingImageUrl}
              alt="Product rating"
              className="mt-1.5 "
            />
            <img
              src={product.ratingImageUrl}
              alt="Product rating"
              className="mt-1.5 "
            />{" "}
            <img
              src={product.ratingImageUrl}
              alt="Product rating"
              className="mt-1.5 "
            />{" "}
            <img
              src={product.ratingImageUrl}
              alt="Product rating"
              className="mt-1.5 "
            />{" "}
            <img
              src={product.ratingImageUrl}
              alt="Product rating"
              className="mt-1.5 "
            />
          </div>
        </div>
        {direction == "horizontal" && (
          <div className="flex mr-3 w-1/4">
            <img src={shoppingBag} alt="" />
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
