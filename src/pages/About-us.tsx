import image1 from "../assets/images/about-us/image-1.png";

const AboutUs = () => {
  return (
    <div>
      <section className="flex gap-5 max-md:flex-col max-md:gap-0 md:max-w-[1200px] md:my-16 md:mx-auto">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="text-6xl font-semibold leading-[67px] text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              100% Trusted Organic Food Store
            </h1>
            <p className="mt-9 text-lg leading-7 text-stone-500 max-md:max-w-full">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
              laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
              Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
              Donec a eros non massa vulputate ornare. Vivamus ornare commodo
              ante, at commodo felis congue vitae.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image1}
            alt="about us image"
            className="grow w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
