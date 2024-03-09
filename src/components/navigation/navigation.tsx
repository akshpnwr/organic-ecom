import Middle from "./middle";
import NavLinks from "./nav-links";
import Top from "./top";

const Navigation: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <Top />
      <Middle />
      <NavLinks />
    </div>
  );
};

export default Navigation;
