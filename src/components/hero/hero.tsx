import React from "react";
import heroImage from "../../assets/hero-image.png";
import rightArrow from "../../assets/right-arrow.svg";
import FeatureSection from "./featured-section";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  isDecorative?: boolean;
};

const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  isDecorative = false,
}) => (
  <img
    src={src}
    alt={isDecorative ? "" : alt}
    className={className}
    loading="lazy"
  />
);

export const Hero: React.FC = () => {
  return (
    <>
      <section className="flex flex-col mt-5 md:mx-32 md:border md:drop-shadow-custom border-black justify-center px-4 py-8 rounded-lg bg-zinc-100 md:px-16 md:py-32">
        <header className=" ml-4 md:ml-0 md:max-w-full">
          <div className="flex flex-col gap-5 md:flex-row md:gap-0">
            <div className="flex flex-col w-full md:w-1/2 md:ml-0">
              <div className="flex-col items-start self-stretch my-auto font-semibold md:mt-0 md:max-w-full">
                <h2 className="text-base font-light tracking-wider leading-4 text-left text-green-600 uppercase md:max-w-full">
                  Welcome to Shopery
                </h2>
                <h1 className="self-stretch mt-4 md:mt-6 text-2xl leading-[33px] md:text-6xl md:leading-[80px] text-zinc-900 md:max-w-full">
                  Fresh & Healthy <br /> Organic Food
                </h1>
                <p className="mt-4 md:mt-6 text-3xl font-medium leading-10">
                  Sale up to{" "}
                  <span className="text-amber-500 font-bold">30% OFF</span>
                </p>
                <p className="mt-3 text-sm leading-5 font-extralight text-zinc-400">
                  Free shipping on all your order. we deliver, you enjoy
                </p>
                <button className="flex gap-4 justify-center px-5 py-3 mt-6 md:mt-8 text-base leading-5 text-white bg-green-600 rounded-[53px] md:px-10 md:py-5">
                  <span>Shop now</span>
                  <ImageComponent
                    src={rightArrow}
                    alt="Arrow Right"
                    className="shrink-0 self-start aspect-[1.15] w-[25px]"
                  />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ImageComponent
                src={heroImage}
                alt="Fresh Organic Foods"
                className="object-cover inset-0 w-full h-full"
              />
            </div>
          </div>
        </header>
      </section>
      <FeatureSection />
    </>
  );
};

export default Hero;
