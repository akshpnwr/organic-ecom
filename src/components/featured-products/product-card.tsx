import React from "react";

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  ratingImageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="flex flex-col whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 leading-[150%] max-w-[248px]">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full aspect-[1.01]"
      />
      <div className="flex flex-col justify-center px-4 py-3.5 w-full">
        <p className="text-sm text-neutral-600">{product.name}</p>
        <p className="text-base font-custombold text-zinc-900">
          {product.price}
        </p>
        <img
          src={product.ratingImageUrl}
          alt="Product rating"
          className="mt-1.5 aspect-[5] w-[60px]"
        />
      </div>
    </article>
  );
};

export default ProductCard;
