import React from "react";
import Feature from "./feature";
import deliveryTruck from "../../assets/delivery-truck.svg";
import payment from "../../assets/package.svg";
import headphones from "../../assets/headphones.svg";
import shoppingBag from "../../assets/shopping-bag.svg";

const features = [
  {
    src: deliveryTruck,
    alt: "Free Shipping Icon",
    title: "Free Shipping",
    description: "Free shipping on all your orders",
  },
  {
    src: headphones,
    alt: "Customer Support Icon",
    title: "Customer Support 24/7",
    description: "Instant access to Support",
  },
  {
    src: payment,
    alt: "Secure Payment Icon",
    title: "100% Secure Payment",
    description: "We ensure your money is safe",
  },
  {
    src: shoppingBag,
    alt: "Money-Back Guarantee Icon",
    title: "Money-Back Guarantee",
    description: "30 Days Money-Back Guarantee",
  },
];

const FeatureSection: React.FC = () => (
  <section className="md:w-3/4 md:mx-auto md:relative md:bottom-16 justify-between p-0 md:p-10 bg-white rounded-md shadow-2xl max-md:px-5">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      {features.map((feature, index) => (
        <Feature
          key={index}
          src={feature.src}
          alt={feature.alt}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  </section>
);

export default FeatureSection;
