interface FeatureProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ src, alt, title, description }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex grow gap-4 justify-center whitespace-nowrap max-md:mt-10">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 my-auto w-10 aspect-square"
      />
      <div className="flex flex-col grow shrink-0 justify-center basis-0 w-fit">
        <div className="text-sm font-semibold leading-3 text-zinc-900">
          {title}
        </div>
        <div className="mt-2 text-xs text-neutral-400">{description}</div>
      </div>
    </div>
  </div>
);

export default Feature;
