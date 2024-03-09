import * as React from "react";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";

interface ImageProps {
  src: string;
  alt: string;
  customClass?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, customClass }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`shrink-0 self-start w-8 aspect-square ${customClass}`}
  />
);

interface SearchAreaProps {
  placeholder: string;
}

const SearchArea: React.FC<SearchAreaProps> = ({ placeholder }) => (
  <form className="w-2/5 flex gap-0 self-stretch rounded-md border border-solid border-neutral-200">
    <label
      htmlFor="searchInput"
      className="flex flex-auto gap-2 px-4 py-3 text-base leading-5 text-zinc-500"
    >
      <img
        loading="lazy"
        alt="Search icon"
        src={search}
        className="shrink-0 self-start w-5 aspect-square"
      />
      <input
        id="searchInput"
        className="flex-auto outline-none"
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </label>
    <button
      type="submit"
      className="justify-center px-6 py-3.5 text-sm rounded-r font-semibold leading-4 text-white bg-green-600 max-md:px-5"
    >
      Search
    </button>
  </form>
);

const Middle: React.FC = () => (
  // <header className="flex gap-5 justify-between items-center px-16 whitespace-nowrap max-md:flex-wrap">
  <header className="flex w-3/4 my-0 mx-auto justify-between">
    <div className="flex gap-2 self-stretch my-auto text-3xl font-medium tracking-tighter leading-10 text-green-950">
      <Image src={logo} alt="Ecobazar logo" />
      <div className="grow">Ecobazar</div>
    </div>
    <SearchArea placeholder="Search" />
    <div className="flex justify-between self-stretch my-auto">
      <Image src={heart} alt="Icon description" customClass="mr-3" />
      <div className="flex gap-3 pl-3 border-l-2">
        <Image src={cart} alt="Shopping cart" />
        <div className="flex-col flex-1">
          <div className="text-xs leading-3 text-neutral-600">
            {" "}
            Shopping cart:{" "}
          </div>
          <div className="mt-2 text-sm font-medium leading-4 text-zinc-900">
            $57.00
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Middle;
