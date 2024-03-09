import React from "react";

type DropdownLinkProps = {
  title: string;
  iconSrc: string;
};

const DropdownItem: React.FC<DropdownLinkProps> = ({ title, iconSrc }) => (
  <div className="flex gap-1 whitespace-nowrap">
    <div className="grow">{title}</div>
    <img
      loading="lazy"
      src={iconSrc}
      alt=""
      className="shrink-0 my-auto w-4 aspect-square"
    />
  </div>
);

const NavLinks: React.FC = () => {
  const dropdownItems = [
    {
      title: "Home",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fe00e599915fab8555a305e7dde9dea3ebb1a25e40bbd1796e48d54356850dfb?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    },
    {
      title: "Shop",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e631933bad29a05f141f373c87c84190c222e57e78df2d0d4e386efc5352ff?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    },
    {
      title: "Pages",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e631933bad29a05f141f373c87c84190c222e57e78df2d0d4e386efc5352ff?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    },
    {
      title: "Blog",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c6e631933bad29a05f141f373c87c84190c222e57e78df2d0d4e386efc5352ff?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&",
    },
  ];

  return (
    <header className="flex justify-center items-center px-16 py-4 text-sm font-medium leading-5 bg-zinc-800 max-md:px-5">
      <nav className="flex gap-5 justify-between w-full max-w-[1120px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between my-auto text-neutral-400 max-md:flex-wrap">
          {dropdownItems.map((item) => (
            <DropdownItem
              key={item.title}
              title={item.title}
              iconSrc={item.iconSrc}
            />
          ))}
          <div>About Us</div>
          <div className="grow whitespace-nowrap">Contact Us</div>
        </div>
        <div className="flex gap-2 text-white whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c54ae817406f7fc34df6f1711aebcf67c5f7320352507c3a3cebb3eed92e0f6a?apiKey=bbddd5bf435648a288c40d6f8ca6b85c&"
            alt="Contact phone"
            className="shrink-0 w-7 aspect-square"
          />
          <div className="grow my-auto">(219) 555-0114</div>
        </div>
      </nav>
    </header>
  );
};

export default NavLinks;
